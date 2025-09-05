import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import validator from "validator";
import crypto from "crypto";
import userModel from "../models/Usermodel.js";
import transporter from "../config/nodemailer.js";
import { getWelcomeTemplate, getPasswordResetTemplate } from "../email.js";

dotenv.config();

const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const Registeruser = await userModel.findOne({ email });
    if (!Registeruser) {
      return res.status(404).json({ message: "Email not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, Registeruser.password);
    if (isMatch) {
      const token = createtoken(Registeruser._id);
      return res.status(200).json({
        token,
        user: { name: Registeruser.name, email: Registeruser.email },
        success: true,
      });
    } else {
      return res.status(401).json({ message: "Invalid password", success: false });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email", success: false });
    }

    // check duplicate email
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();

    const token = createtoken(newUser._id);

    // prepare email
    const mailOptions = {
      from: process.env.EMAIL || "no-reply@example.com",
      to: email,
      subject: "Welcome to UrbanSquare - Your Account Has Been Created",
      html: getWelcomeTemplate(name),
    };

    // send email only if transporter configured
    if (transporter) {
      try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Welcome email sent to", email);
      } catch (mailErr) {
        // log but don't block registration
        console.error("Mail send error (welcome):", mailErr.message || mailErr);
      }
    } else {
      console.log("⚠️ Email service disabled — skipping welcome email");
    }

    return res.status(201).json({
      token,
      user: { name: newUser.name, email: newUser.email },
      success: true,
    });
  } catch (error) {
    console.error("Register error:", error);
    // if duplicate key somehow still thrown
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already exists", success: false });
    }
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "Valid email is required", success: false });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email not found", success: false });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const resetUrl = `${process.env.WEBSITE_URL || "http://localhost:3000"}/reset/${resetToken}`;
    const mailOptions = {
      from: process.env.EMAIL || "no-reply@example.com",
      to: email,
      subject: "Password Reset - UrbanSquare Security",
      html: getPasswordResetTemplate(resetUrl),
    };

    if (transporter) {
      try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Password reset email sent to", email);
      } catch (mailErr) {
        console.error("Mail send error (reset):", mailErr.message || mailErr);
        // still respond success to avoid leaking which emails exist (optional)
        return res.status(500).json({ message: "Failed to send email", success: false });
      }
    } else {
      console.log("⚠️ Email service disabled — skipping password reset email");
      // You can choose to return success or error here. Returning success so front-end flow continues.
    }

    return res.status(200).json({ message: "Email sent", success: true });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const resetpassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters", success: false });
    }

    const user = await userModel.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token", success: false });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;
    await user.save();

    return res.status(200).json({ message: "Password reset successful", success: true });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token, success: true });
    } else {
      return res.status(401).json({ message: "Invalid credentials", success: false });
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logged out", success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const getname = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.error("Get name error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export {
  login,
  register,
  forgotpassword,
  resetpassword,
  adminlogin,
  logout,
  getname,
};
