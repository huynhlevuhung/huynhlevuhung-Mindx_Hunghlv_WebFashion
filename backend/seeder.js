import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import categories from "./data/categories.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Category from "./models/categoryModel.js";
import Product from "./models/productModel.js";

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Xóa dữ liệu cũ
    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();

    // Insert Users & Categories
    const createdUsers = await User.insertMany(users);
    const createdCategories = await Category.insertMany(categories);

    // Lấy id của một category mặc định (ví dụ category đầu tiên)
    const sampleProducts = products.map((product, index) => {
      return {
        ...product,
        category: createdCategories[index % createdCategories.length]._id, // gán categoryId theo vòng
      };
    });

    // Insert Products
    await Product.insertMany(sampleProducts);

    console.log("✅ Data Imported!");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

importData();
