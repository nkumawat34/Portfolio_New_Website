const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  incrementView,
} = require("../controllers/blogController").default

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

// Increment view count for a blog
router.put("/views/:id", incrementView);


module.exports = router;
