// controllers/viewController.js

import View from "../models/viewModel.js";
import NodeCache from 'node-cache'
const viewCache = new NodeCache({ stdTTL: 3600 }); // cache for 1 hour

const incrementView = async (req, res) => {
    const { blogId } = req.params;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const key = `${ip}-${blogId}`;
  
    // If already viewed recently, skip increment
    if (viewCache.has(key)) {
      return res.status(200).json({ message: "View already counted recently" });
    }
  
    try {
      const updatedView = await View.findOneAndUpdate(
        { blogId },
        { $inc: { views: 1 } },
        { new: true, upsert: true }
      );
  
      viewCache.set(key, true); // Mark this IP+blog as viewed
      res.status(200).json(updatedView);
    } catch (error) {
      res.status(500).json({ message: "Error incrementing view", error });
    }
  };
const getView = async (req, res) => {
  const { blogId } = req.params;
  try {
    const view = await View.findOne({ blogId });
    res.status(200).json(view || { blogId, views: 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching view count", error });
  }
};


const getAllViews = async (req, res) => {
  try {
    const views = await View.find(); 
    res.status(200).json(views);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all views", error });
  }
};

export default {
  incrementView,
  getView,
  getAllViews,
};
