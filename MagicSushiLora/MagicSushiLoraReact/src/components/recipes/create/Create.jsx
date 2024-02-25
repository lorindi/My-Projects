import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Create.module.css";
const CreateRecipe = () => {
  const { axiosInstance } = useContext(Contexts);
  const [formData, setFormData] = useState({
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
      console.log("Рецептата е създадена успешно:", response.data);
    } catch (error) {
      console.error("Възникна грешка при създаването на рецепта:", error);
    }
  };
  return (
    <div>
      <h2>Създайте нова рецепта</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_first}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_first: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_second}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_second: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_third}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_third: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_fourth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_fourth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_fifth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_fifth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_sixth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_sixth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_seventh}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_seventh: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_eighth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_eighth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_ninth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_ninth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_tenth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_tenth: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_eleventh}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_eleventh: e.target.value })
            }
          />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input
            type="text"
            placeholder="Enter ingredient"
            value={formData.ingredients_twelfth}
            onChange={(e) =>
              setFormData({ ...formData, ingredients_twelfth: e.target.value })
            }
          />
        </div>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
