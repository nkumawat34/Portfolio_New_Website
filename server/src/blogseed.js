// seedBlogs.js
const mongoose = require("mongoose");
const Blog = require("./models/blogModel.js"); 
const blogs = require("../../client/src/data/blogs"); 
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("Connected to MongoDB");

  // Clear existing blogs if needed
  await Blog.deleteMany({});

  // Insert new blogs
  await Blog.insertMany(blogs);
  console.log("Blogs inserted successfully");

  mongoose.disconnect();
})
.catch(err => {
  console.error("MongoDB connection error:", err);
});
