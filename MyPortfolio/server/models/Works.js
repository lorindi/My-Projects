const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,

  },
  technologies: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Work = mongoose.model("Work", workSchema);
module.exports = Work;
