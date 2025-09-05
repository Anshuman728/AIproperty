import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

let transporter = null;

// Flag se check karo
const enableEmail = process.env.ENABLE_EMAIL === "true";

if (enableEmail) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("📧 Email service enabled and configured");
} else {
  console.log("⚠️ Email service disabled (ENABLE_EMAIL=false)");
}

export default transporter;
