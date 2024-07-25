// import { useState } from 'react';
// import './CreateRecipe.scss'
// function CreateRecipe() {
//   const [form, setForm] = useState({
//     image: '',
//     title: '',
//     description: '',
//     ingredients: '',
//     category: '',
//     prepTime: '',
//     cookTime: '',
//     servings: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.image || !/^https:\/\/.{27,}$/.test(form.image)) {
//       newErrors.image = 'Image URL should start with "https://" and be at least 30 characters long';
//     }
//     if (!form.title || !/\S{3,}/.test(form.title)) {
//       newErrors.title = 'Title should contain at least 3 non-space characters';
//     }
//     if (!form.description || !/\S{15,}/.test(form.description)) {
//       newErrors.description = 'Instructions should contain at least 15 non-space characters';
//     }
//     if (!form.ingredients || !/\S{10,}/.test(form.ingredients)) {
//       newErrors.ingredients = 'Ingredients should contain at least 10 non-space characters';
//     }
//     if (!form.category) {
//       newErrors.category = 'Please select a category';
//     }
//     if (!form.prepTime || !/\S{1,}/.test(form.prepTime)) {
//       newErrors.prepTime = 'Prep Time should contain at least 1 non-space character';
//     }
//     if (!form.cookTime || !/\S{1,}/.test(form.cookTime)) {
//       newErrors.cookTime = 'Cook Time should contain at least 1 non-space character';
//     }
//     if (!form.servings) {
//       newErrors.servings = 'Servings are required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form Submitted', form);
//       // Add the recipe submission logic here
//     }
//   };

//   return (
//     <div className="containerCreateRecipe">
//       <form className="createRecipeForm" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="image" className="createRecipeLabel">
//             Image
//           </label>
//           <input
//             type="url"
//             name="image"
//             className="createRecipeInput"
//             value={form.image}
//             onChange={handleChange}
//             required
//             minLength="30"
//             pattern="^https://.{27,}$"
//           />
//           {errors.image && <p className="errorMessage">{errors.image}</p>}
//         </div>

//         <div>
//           <label htmlFor="title" className="createRecipeLabel">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             className="createRecipeInput"
//             value={form.title}
//             onChange={handleChange}
//             required
//             minLength="3"
//             pattern="\S{3,}"
//           />
//           {errors.title && <p className="errorMessage">{errors.title}</p>}
//         </div>

//         <div className="contentTextarea">
//           <label htmlFor="description" className="createRecipeLabel">
//             Instructions
//           </label>
//           <textarea
//             name="description"
//             rows="4"
//             cols="50"
//             className="createRecipeTextarea"
//             value={form.description}
//             onChange={handleChange}
//             required
//             minLength="15"
//             pattern="\S{15,}"
//           ></textarea>
//           {errors.description && <p className="errorMessage">{errors.description}</p>}
//         </div>

//         <div className="contentTextarea">
//           <label htmlFor="ingredients" className="createRecipeLabel">
//             Ingredients
//           </label>
//           <textarea
//             name="ingredients"
//             rows="4"
//             cols="50"
//             className="createRecipeTextarea"
//             value={form.ingredients}
//             onChange={handleChange}
//             required
//             minLength="10"
//             pattern="\S{10,}"
//           ></textarea>
//           {errors.ingredients && <p className="errorMessage">{errors.ingredients}</p>}
//         </div>

//         <div>
//           <label htmlFor="category" className="createRecipeLabel">
//             Category
//           </label>
//           <select
//             name="category"
//             className="createRecipeInput"
//             value={form.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select a category
//             </option>
//             <option value="breakfast">Breakfast</option>
//             <option value="lunch">Lunch</option>
//             <option value="dinner">Dinner</option>
//             <option value="snack">Snack</option>
//             <option value="vegetarian">Vegetarian</option>
//             <option value="vegan">Vegan</option>
//             <option value="gluten-free">Gluten-Free</option>
//             <option value="dairy-free">Dairy-Free</option>
//             <option value="low-carb">Low Carb</option>
//             <option value="low-calorie">Low Calorie</option>
//             <option value="high-protein">High Protein</option>
//             <option value="pescatarian">Pescatarian</option>
//             <option value="keto">Keto</option>
//             <option value="paleo">Paleo</option>
//             <option value="mediterranean">Mediterranean</option>
//             <option value="whole30">Whole30</option>
//           </select>
//           {errors.category && <p className="errorMessage">{errors.category}</p>}
//         </div>

//         <div>
//           <label htmlFor="prepTime" className="createRecipeLabel">
//             Prep Time
//           </label>
//           <input
//             type="text"
//             name="prepTime"
//             className="createRecipeInput"
//             value={form.prepTime}
//             onChange={handleChange}
//             required
//             minLength="1"
//             pattern="\S{1,}"
//           />
//           {errors.prepTime && <p className="errorMessage">{errors.prepTime}</p>}
//         </div>

//         <div>
//           <label htmlFor="cookTime" className="createRecipeLabel">
//             Cook Time
//           </label>
//           <input
//             type="text"
//             name="cookTime"
//             className="createRecipeInput"
//             value={form.cookTime}
//             onChange={handleChange}
//             required
//             minLength="1"
//             pattern="\S{1,}"
//           />
//           {errors.cookTime && <p className="errorMessage">{errors.cookTime}</p>}
//         </div>

//         <div>
//           <label htmlFor="servings" className="createRecipeLabel">
//             Servings
//           </label>
//           <input
//             type="text"
//             name="servings"
//             className="createRecipeInput"
//             value={form.servings}
//             onChange={handleChange}
//             required
//             minLength="1"
//           />
//           {errors.servings && <p className="errorMessage">{errors.servings}</p>}
//         </div>

//         <button type="submit" className="createRecipeButton">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import './CreateRecipe.scss';

function CreateRecipe() {
  const [form, setForm] = useState({
    image: '',
    title: '',
    description: '',
    ingredients: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    switch(step) {
      case 1:
        if (!form.image || !/^https:\/\/.{27,}$/.test(form.image)) {
          newErrors.image = 'Image URL should start with "https://" and be at least 30 characters long';
        }
        if (!form.title || !/\S{3,}/.test(form.title)) {
          newErrors.title = 'Title should contain at least 3 non-space characters';
        }
        break;
      case 2:
        if (!form.description || !/\S{15,}/.test(form.description)) {
          newErrors.description = 'Instructions should contain at least 15 non-space characters';
        }
        if (!form.ingredients || !/\S{10,}/.test(form.ingredients)) {
          newErrors.ingredients = 'Ingredients should contain at least 10 non-space characters';
        }
        break;
      case 3:
        if (!form.category) {
          newErrors.category = 'Please select a category';
        }
        if (!form.prepTime || !/\S{1,}/.test(form.prepTime)) {
          newErrors.prepTime = 'Prep Time should contain at least 1 non-space character';
        }
        if (!form.cookTime || !/\S{1,}/.test(form.cookTime)) {
          newErrors.cookTime = 'Cook Time should contain at least 1 non-space character';
        }
        break;
      case 4:
        if (!form.servings) {
          newErrors.servings = 'Servings are required';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log('Form Submitted', form);
      // Add the recipe submission logic here
    }
  };

  return (
    <div className="containerCreateRecipe">
      <form className="createRecipeForm" onSubmit={handleSubmit}>
        {step === 1 && <Step1 form={form} handleChange={handleChange} errors={errors} />}
        {step === 2 && <Step2 form={form} handleChange={handleChange} errors={errors} />}
        {step === 3 && <Step3 form={form} handleChange={handleChange} errors={errors} />}
        {step === 4 && <Step4 form={form} handleChange={handleChange} errors={errors} />}
        
        <div className="buttonGroup">
          {step > 1 && <button type="button" onClick={handlePrev} className="createRecipeButton">Previous</button>}
          {step < 4 && <button type="button" onClick={handleNext} className="createRecipeButton">Next</button>}
          {step === 4 && <button type="submit" className="createRecipeButton">Create</button>}
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
