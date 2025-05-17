const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
  title: {
    type: String,
    required: true,
  },
  summary: String,
  author: String,
  date: {
    type: Date,
    default: Date.now, // better for sorting and querying
  },
  content: {
    type: String,
    required: true,
  },
  views:{
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Blog", blogSchema);
