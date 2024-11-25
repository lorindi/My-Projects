import './CreateRecipe.scss'
function CreateRecipe() {
  
  return (
    <div className="containerCreateRecipe">
      <form className="createRecipeForm">
        <div>
          <label htmlFor="image" className="createRecipeLabel">
            Image
          </label>
          <input
            type="url"
            name="image"
            className="createRecipeInput"
            required
            minLength="30"
            pattern="^https://.{27,}$"
          />
        </div>

        <div>
          <label htmlFor="title" className="createRecipeLabel">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="createRecipeInput"
            required
            minLength="3"
            pattern="\S{3,}"
          />
        </div>

        <div className="contentTextarea">
          <label htmlFor="description" className="createRecipeLabel">
            Instructions
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className="createRecipeTextarea"
            required
            minLength="15"
            pattern="\S{15,}"
          ></textarea>
        </div>

        <div className="contentTextarea">
          <label htmlFor="ingredients" className="createRecipeLabel">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            rows="4"
            cols="50"
            className="createRecipeTextarea"
            required
            minLength="10"
            pattern="\S{10,}"
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="createRecipeLabel">
            Category
          </label>
          <select
            name="category"
            className="createRecipeInput"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
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
        </div>

        <div>
          <label htmlFor="prepTime" className="createRecipeLabel">
            Prep Time
          </label>
          <input
            type="text"
            name="prepTime"
            className="createRecipeInput"
            minLength="1"
            pattern="\S{1,}"
          />
        </div>

        <div>
          <label htmlFor="cookTime" className="createRecipeLabel">
            Cook Time
          </label>
          <input
            type="text"
            name="cookTime"
            className="createRecipeInput"
          required
            minLength="1"
            pattern="\S{1,}"
          />
        </div>

        <div>
          <label htmlFor="servings" className="createRecipeLabel">
            Servings
          </label>
          <input
            type="text"
            name="servings"
            className="createRecipeInput"
          
            required
            minLength="1"
          />
        </div>

        <button type="submit" className="createRecipeButton">
          Create
        </button>
      </form>
    </div>
  );
}


export default CreateRecipe