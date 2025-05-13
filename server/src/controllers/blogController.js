const Blog = require("../models/blogModel");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, summary, author, content, date } = req.body;

    const newBlog = new Blog({
      title,
      summary,
      author,
      content,
      date, 
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog", error: error.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }); // latest first
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {

    const blog = await Blog.findOne({ id: parseInt(req.params.id) });
    console.log(blog)
  try {
   // consol.log("hi")
   
    if (!blog) return res.status(404).json({ message: "Blog not found" });
   

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch blog", error: error.message });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error: error.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
