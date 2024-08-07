import mongoose from 'mongoose';

const ingredientsSchema = new mongoose.Schema({
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

const Ingredients = mongoose.model('Ingredients', ingredientsSchema);
export default Ingredients;
