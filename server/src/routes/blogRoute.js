const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// Create a new blog
router.post("/", createBlog);

// Get all blogs
router.get("/", getAllBlogs);

// Get a single blog by ID
router.get("/:id", getBlogById);

// Update a blog by ID
router.put("/:id", updateBlog);

// Delete a blog by ID
router.delete("/:id", deleteBlog);

module.exports = router;
