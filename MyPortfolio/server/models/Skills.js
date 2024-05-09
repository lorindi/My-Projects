const mongoose = require("mongoose");
const { categories } = require("./data");
const skillsSchema = new mongoose.Schema({

  icon: {
    type: String,
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
});

const Skills = mongoose.model("Skills", skillsSchema);
module.exports = Skills;
