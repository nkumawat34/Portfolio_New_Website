import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoute.js"
import viewRoutes from "./routes/viewRoute.js";
import blogRoutes from "./routes/blogRoute.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/views", viewRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);
app.get("/", (req, res) => {
  res.send("Contact API is running...");
});

export default app;
