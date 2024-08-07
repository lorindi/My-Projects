import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  ingredient: {
    type: String,
    required: true,
    minlength: 2,
    match: /\S{2,}/,
    trim: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\s]+$/.test(value);
      },
      message: 'Ingredient name must contain only letters and spaces.'
    }
  },
  breakdownInTheStomach: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function(value) {
        return typeof value === 'number' && !isNaN(value);
      },
      message: 'Breakdown time in the stomach must be a valid number.'
    }
  },
  smallIntestine: {
    type: Number,
    required: true,
    min: 0, 
    validate: {
      validator: function(value) {
        return typeof value === 'number' && !isNaN(value);
      },
      message: 'Small intestine breakdown time must be a valid number.'
    }
  }
});

const Ingredient = mongoose.model('Ingredients', ingredientSchema);
export default Ingredient;
