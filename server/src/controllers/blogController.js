import Blog from "../models/blogModel.js";
import NodeCache from 'node-cache'
const viewCache = new NodeCache({ stdTTL: 3600 }); // cache for 1 hour

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

const incrementView = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const key = `${ip}-${id}`;
  
    // If already viewed recently, skip increment
    if (viewCache.has(key)) {
      return res.status(200).json({ message: "View already counted recently" });
    }
  
    try {
      const updatedView = await Blog.findOneAndUpdate(
        { id },
        { $inc: { views: 1 } },
        { new: true, upsert: true }
      );
  
      viewCache.set(key, true); // Mark this IP+blog as viewed
      res.status(200).json(updatedView);
    } catch (error) {
      res.status(500).json({ message: "Error incrementing view", error });
    }
  };



export default  {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  incrementView,
};
