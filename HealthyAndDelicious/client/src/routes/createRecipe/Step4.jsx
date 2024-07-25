import React from 'react';

function Step4({ form, handleChange, errors }) {
  return (
    <div>
      <div>
        <label htmlFor="servings" className="createRecipeLabel">Servings</label>
        <input
          type="text"
          name="servings"
          className="createRecipeInput"
          value={form.servings}
          onChange={handleChange}
          required
          minLength="1"
        />
        {errors.servings && <p className="errorMessage">{errors.servings}</p>}
      </div>
    </div>
  );
}

export default Step4;
