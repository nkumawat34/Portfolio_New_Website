// models/View.js
const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
  blogId: Number,    
  views: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("View", viewSchema);
