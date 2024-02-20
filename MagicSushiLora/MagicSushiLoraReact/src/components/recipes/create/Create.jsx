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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("recipes/", formData);
      console.log("Рецептата е създадена успешно:", response.data);
      // Можете да добавите код за пренасочване към страница за детайли за създадената рецепта или друго действие
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
            onChange={handleChange}
            placeholder="Images of your recipe"
          />
        </div>
        <div>
          {/* <label>Title</label> */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Title"
          />
        </div>
        <div>
          {/* <label>Description</label> */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Description"
          />
        </div>
        <div>
          {/* <label>Category</label> */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
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
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Ingredient</label> */}
          <input type="text" placeholder="Enter ingredient" />
        </div>
        <div>
          {/* <label htmlFor="">Cook time</label> */}
          <input type="text" placeholder="Cooking time" />
        </div>
        <div>
          {/* <label htmlFor="">Servings</label> */}
          <input type="text" placeholder="Portions" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
