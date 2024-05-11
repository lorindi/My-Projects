const mongoose = require("mongoose");
const { categories } = require("./data");

const skillSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,

  },

  name: {
    type: String,
    required: [true, "Skill name is required"],
    minlength: 2,
  },

  description: {
    type: String,
    required: [true, "Skill description is required"],
    minlength: 5,
  },
  categories: {
    type: String,
    enum: categories,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
