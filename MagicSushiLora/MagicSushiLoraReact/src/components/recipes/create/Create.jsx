import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/Contexts";
const CreateRecipe = () => {
    const { initialToken, axiosInstance } = useContext(Contexts);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('http://127.0.0.1:8000/api/recipes/', formData);
      console.log('Рецептата е създадена успешно:', response.data);
      // Можете да добавите код за пренасочване към страница за детайли за създадената рецепта или друго действие
    } catch (error) {
      console.error('Възникна грешка при създаването на рецепта:', error);
    }
  };

  return (
    <div>
      <h2>Създайте нова рецепта</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заглавие:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <textarea
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
