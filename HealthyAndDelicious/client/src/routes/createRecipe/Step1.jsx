import React from 'react';

function Step1({ form, handleChange, errors }) {
  return (
    <div>
      <div>
        <label htmlFor="image" className="createRecipeLabel">Image</label>
        <input
          type="url"
          name="image"
          className="createRecipeInput"
          value={form.image}
          onChange={handleChange}
          required
          minLength="30"
          pattern="^https://.{27,}$"
        />
        {errors.image && <p className="errorMessage">{errors.image}</p>}
      </div>
      <div>
        <label htmlFor="title" className="createRecipeLabel">Title</label>
        <input
          type="text"
          name="title"
          className="createRecipeInput"
          value={form.title}
          onChange={handleChange}
          required
          minLength="3"
          pattern="\S{3,}"
        />
        {errors.title && <p className="errorMessage">{errors.title}</p>}
      </div>
    </div>
  );
}

export default Step1;
