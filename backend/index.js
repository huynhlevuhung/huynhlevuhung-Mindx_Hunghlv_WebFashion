// packages
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Lấy __dirname (vì dùng ES Module nên phải làm thế này)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env trong thư mục backend
dotenv.config({ path: path.join(__dirname, ".env") });

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

console.log("MONGO_URI:", mongoURI); // test xem có ra link không

// Connect Mongo
connectDB(mongoURI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/orders", orderRoutes);

//******PayPal********
app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

console.clear();
app.listen(port, () => console.log(`Server running on port: ${port}`));
