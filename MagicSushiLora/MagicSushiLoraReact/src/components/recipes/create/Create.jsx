import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Create.module.css";
const CreateRecipe = () => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showMoreIngredients, setShowMoreIngredients] = useState(false);

  const toggleVisibility = (isVisible, setIsVisible) => {
    setIsVisible(!isVisible);
  };

  const { axiosInstance, userId, theme } = useContext(Contexts);
  const [formData, setFormData] = useState({
    creator: userId,
    image: "",
    title: "",
    description: "",
    category: "",
    ingredients_first: "",
    ingredients_second: "",
    ingredients_third: "",
    ingredients_fourth: "",
    ingredients_fifth: "",
    ingredients_sixth: "",
    ingredients_seventh: "",
    ingredients_eighth: "",
    ingredients_ninth: "",
    ingredients_tenth: "",
    ingredients_eleventh: "",
    ingredients_twelfth: "",
    ingredients_thirteenth: "",
    ingredients_fourteenth: "",
    ingredients_fifteenth: "",
    prep_time: "",
    cook_time: "",
    servings: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData:", formData);
    try {
      const response = await axiosInstance.post("/recipes/create/", formData);
      console.log(formData);
      console.log("Recipe created successfully:", response.data);
    } catch (error) {
      console.error("An error occurred while creating the recipe:", error);
    }
  };
  return (
    <div className={`${styles.mainContainerCreateRecipe} `} data-theme={theme}>
      <div className={`${styles.containerCreateRecipe} `}>
        <h2 className={`${styles.createRecipeTitle} `}>Create a new recipe</h2>
        <form
          onSubmit={handleSubmit}
          className={`${styles.contentCreateRecipeForm} `}
        >
          <div
            className={`${styles.contentCreateRecipeImage} ${styles.contentCreateRecipe}`}
          >
            {/* <label>Image</label> */}
            <input
              className={styles.editUserFormInput}
              name="image"
              type="text"
              value={formData.image}
              placeholder="Images of your recipe"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>
          <div
            className={`${styles.contentCreateRecipeTitle} ${styles.contentCreateRecipe}`}
          >
            {/* <label>Title</label> */}
            <input
              type="text"
              name="title"
              value={formData.title}
              required
              placeholder="Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div
            className={`${styles.contentCreateRecipeDescription} ${styles.contentCreateRecipe}`}
          >
            {/* <label>Description</label> */}
            <textarea
              name="description"
              value={formData.description}
              required
              placeholder="Description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div
            className={`${styles.contentCreateRecipeCategory} ${styles.contentCreateRecipe}`}
          >
            {/* <label>Category</label> */}
            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="uramaki">Uramaki</option>
              <option value="futomaki">Futomaki</option>
              <option value="hosomaki">Hosomaki</option>
              <option value="nigiri">Nigiri</option>
              <option value="sashimi">Sashimi</option>
              <option value="poke">Poke</option>
              <option value="sets">Sets</option>
              <option value="additives">Additives</option>
              <option value="salads">Salads</option>
              <option value="gioza">Gioza</option>
              <option value="noodles">Noodles</option>
              <option value="tempura">Tempura</option>
              <option value="soup">Soup</option>
              <option value="teppanyaki">Teppanyaki</option>
              <option value="chicken">Chicken</option>
              <option value="pork">Pork</option>
              <option value="fish">Fish</option>
              <option value="beef">Beef</option>
              <option value="garnish">Garnish</option>
              <option value="tataki">Tataki</option>
              <option value="chirashi">Chirashi</option>
              <option value="gunkan">Gunkan</option>
              <option value="yakitori">Yakitori</option>
              <option value="okonomiyaki">Okonomiyaki</option>
              <option value="tonkatsu">Tonkatsu</option>
              <option value="sukiyaki">Sukiyaki</option>
              <option value="shabu-shabu">Shabu-shabu</option>
              <option value="udon">Udon</option>
              <option value="soba">Soba</option>
            </select>
          </div>
          <div
            className={`${styles.contentCreateRecipePrepTime} ${styles.contentCreateRecipe}`}
          >
            {/* <label htmlFor="">Cook time</label> */}
            <input
              type="text"
              placeholder="Prep time"
              value={formData.prep_time}
              onChange={(e) =>
                setFormData({ ...formData, prep_time: e.target.value })
              }
            />
          </div>
          <div
            className={`${styles.contentCreateRecipeCookTime} ${styles.contentCreateRecipe}`}
          >
            {/* <label htmlFor="">Servings</label> */}
            <input
              type="text"
              placeholder="Cook time"
              value={formData.cook_time}
              onChange={(e) =>
                setFormData({ ...formData, cook_time: e.target.value })
              }
            />
          </div>
          <div
            className={`${styles.contentCreateRecipeServings} ${styles.contentCreateRecipe}`}
          >
            {/* <label htmlFor="">Servings</label> */}
            <input
              type="text"
              placeholder="Servings"
              value={formData.servings}
              onChange={(e) =>
                setFormData({ ...formData, servings: e.target.value })
              }
            />
          </div>
          <div className={`${styles.contentMoreLessButtons}`}>
            {!showMoreIngredients && (
              <button
                type="button"
                onClick={() =>
                  toggleVisibility(showIngredients, setShowIngredients)
                }
              >
                {!showIngredients ? "M" : "L"}
              </button>
            )}
            {showIngredients && (
              <button
                type="button"
                onClick={() =>
                  toggleVisibility(showMoreIngredients, setShowMoreIngredients)
                }
              >
                {!showMoreIngredients ? "M" : "L"}
              </button>
            )}
          </div>
          <div className={`${styles.containerCreateRecipeIngredients} `}>
            <div
              className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
            >
              {/* <label htmlFor="">Ingredient</label> */}
              <input
                type="text"
                placeholder="Enter ingredient"
                value={formData.ingredients_first}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredients_first: e.target.value,
                  })
                }
              />
            </div>
            <div
              className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
            >
              {/* <label htmlFor="">Ingredient</label> */}
              <input
                type="text"
                placeholder="Enter ingredient"
                value={formData.ingredients_second}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredients_second: e.target.value,
                  })
                }
              />
            </div>
            <div
              className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
            >
              {/* <label htmlFor="">Ingredient</label> */}
              <input
                type="text"
                placeholder="Enter ingredient"
                value={formData.ingredients_third}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredients_third: e.target.value,
                  })
                }
              />
            </div>
            <div
              className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
            >
              {/* <label htmlFor="">Ingredient</label> */}
              <input
                type="text"
                placeholder="Enter ingredient"
                value={formData.ingredients_fourth}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredients_fourth: e.target.value,
                  })
                }
              />
            </div>
          </div>
          {/* <button>Enter more ingredients</button> */}
          {/* </div> */}
          <div className={`${styles.mainContentCreateRecipeIngredients}`}>
            {showIngredients && (
              <>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_fifth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_fifth: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_sixth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_sixth: e.target.value,
                      })
                    }
                  />
                </div>

                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_seventh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_seventh: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_eighth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_eighth: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}
          </div>
          <div className={`${styles.mainContentCreateRecipeIngredients}`}>
            {showMoreIngredients && (
              <>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_ninth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_ninth: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_tenth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_tenth: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_eleventh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_eleventh: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_twelfth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_twelfth: e.target.value,
                      })
                    }
                  />
                </div>

                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_thirteenth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_thirteenth: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_fourteenth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_fourteenth: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className={`${styles.contentCreateRecipeIngredient} ${styles.contentCreateRecipe}`}
                >
                  {/* <label htmlFor="">Ingredient</label> */}
                  <input
                    type="text"
                    placeholder="Enter ingredient"
                    value={formData.ingredients_fifteenth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ingredients_fifteenth: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
