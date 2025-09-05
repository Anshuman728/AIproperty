import fs from "fs";
import imagekit from "../config/imagekit.js";
import Property from "../models/propertymodel.js";

const addproperty = async (req, res) => {
  try {
    const {
      title,
      location,
      price,
      beds,
      baths,
      sqft,
      type,
      availability,
      description,
      amenities,
      phone,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // Upload images to ImageKit directly from memory
    const imageUrls = await Promise.all(
      images.map(async (item) => {
        try {
          console.log("Processing file:", item.originalname);
          const result = await imagekit.upload({
            file: item.buffer, // Use the buffer directly from memory
            fileName: item.originalname,
            folder: "Property",
          });

          if (result) {
            console.log("File uploaded successfully:", item.originalname);
            return result.url;
          }
        } catch (error) {
          console.error("Error in image upload process:", {
            error: error.message,
            fileName: item.originalname,
          });
          throw error;
        }
      })
    );

    // Create a new product
    const product = new Property({
      title,
      location,
      price,
      beds,
      baths,
      sqft,
      type,
      availability,
      description,
      amenities,
      image: imageUrls,
      phone,
    });

    // Save the product to the database
    await product.save();

    res.json({ message: "Product added successfully", success: true });
  } catch (error) {
    console.log("Error adding product: ", error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

const listproperty = async (req, res) => {
  try {
    const property = await Property.find();
    res.json({ property, success: true });
  } catch (error) {
    console.log("Error listing products: ", error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

const removeproperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.body.id);
    if (!property) {
      return res
        .status(404)
        .json({ message: "Property not found", success: false });
    }
    return res.json({
      message: "Property removed successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error removing product: ", error);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};

const updateproperty = async (req, res) => {
  try {
    const {
      id,
      title,
      location,
      price,
      beds,
      baths,
      sqft,
      type,
      availability,
      description,
      amenities,
      phone,
    } = req.body;

    const property = await Property.findById(id);
    if (!property) {
      console.log("Property not found with ID:", id);
      return res
        .status(404)
        .json({ message: "Property not found", success: false });
    }

    // Update basic property information
    property.title = title;
    property.location = location;
    property.price = price;
    property.beds = beds;
    property.baths = baths;
    property.sqft = sqft;
    property.type = type;
    property.availability = availability;
    property.description = description;
    property.amenities = amenities;
    property.phone = phone;

    if (req.files) {
      const image1 = req.files.image1 && req.files.image1[0];
      const image2 = req.files.image2 && req.files.image2[0];
      const image3 = req.files.image3 && req.files.image3[0];
      const image4 = req.files.image4 && req.files.image4[0];

      const newImages = [image1, image2, image3, image4].filter(
        (item) => item !== undefined
      );

      if (newImages.length > 0) {
        // Upload new images to ImageKit
        const newImageUrls = await Promise.all(
          newImages.map(async (item) => {
            try {
              console.log("Processing file:", item.originalname);
              const result = await imagekit.upload({
                file: item.buffer,
                fileName: item.originalname,
                folder: "Property",
              });

              if (result) {
                console.log("File uploaded successfully:", item.originalname);
                return result.url;
              }
            } catch (error) {
              console.error("Error in image upload process:", {
                error: error.message,
                fileName: item.originalname,
              });
              throw error;
            }
          })
        );

        // Combine existing images with new images
        property.image = [...property.image, ...newImageUrls];
      }
    }

    await property.save();
    return res.json({
      message: "Property updated successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error updating product: ", error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

const singleproperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res
        .status(404)
        .json({ message: "Property not found", success: false });
    }
    res.json({ property, success: true });
  } catch (error) {
    console.log("Error fetching property:", error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

export {
  addproperty,
  listproperty,
  removeproperty,
  updateproperty,
  singleproperty,
};
