import React from 'react';

function Step2({ form, handleChange, errors }) {
  return (
    <div>
      <div className="contentTextarea">
        <label htmlFor="description" className="createRecipeLabel">Instructions</label>
        <textarea
          name="description"
          rows="4"
          cols="50"
          className="createRecipeTextarea"
          value={form.description}
          onChange={handleChange}
          required
          minLength="15"
          pattern="\S{15,}"
        ></textarea>
        {errors.description && <p className="errorMessage">{errors.description}</p>}
      </div>
      <div className="contentTextarea">
        <label htmlFor="ingredients" className="createRecipeLabel">Ingredients</label>
        <textarea
          name="ingredients"
          rows="4"
          cols="50"
          className="createRecipeTextarea"
          value={form.ingredients}
          onChange={handleChange}
          required
          minLength="10"
          pattern="\S{10,}"
        ></textarea>
        {errors.ingredients && <p className="errorMessage">{errors.ingredients}</p>}
      </div>
    </div>
  );
}

export default Step2;
