import React from 'react';

function Step3({ form, handleChange, errors }) {
  return (
    <div>
      <div>
        <label htmlFor="category" className="createRecipeLabel">Category</label>
        <select
          name="category"
          className="createRecipeInput"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="dairy-free">Dairy-Free</option>
          <option value="low-carb">Low Carb</option>
          <option value="low-calorie">Low Calorie</option>
          <option value="high-protein">High Protein</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="keto">Keto</option>
          <option value="paleo">Paleo</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="whole30">Whole30</option>
        </select>
        {errors.category && <p className="errorMessage">{errors.category}</p>}
      </div>
      <div>
        <label htmlFor="prepTime" className="createRecipeLabel">Prep Time</label>
        <input
          type="text"
          name="prepTime"
          className="createRecipeInput"
          value={form.prepTime}
          onChange={handleChange}
          required
          minLength="1"
          pattern="\S{1,}"
        />
        {errors.prepTime && <p className="errorMessage">{errors.prepTime}</p>}
      </div>
      <div>
        <label htmlFor="cookTime" className="createRecipeLabel">Cook Time</label>
        <input
          type="text"
          name="cookTime"
          className="createRecipeInput"
          value={form.cookTime}
          onChange={handleChange}
          required
          minLength="1"
          pattern="\S{1,}"
        />
        {errors.cookTime && <p className="errorMessage">{errors.cookTime}</p>}
      </div>
    </div>
  );
}

export default Step3;
