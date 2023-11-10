import { useState } from "react";
// import { useHistory } from "react-router-dom";
import styles from "./CreateForm.module.css";

// const baseUrl = "http://localhost:8000";


export const CreateForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    price: "",
    shortDescription: "",
    description: "",
  });

  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.containerCreateForm}>
      <form onSubmit={handleSubmit} className={styles.createForm} method="post" action="" encType="multipart/form-data">
        <div>
          <label htmlFor="image" className={styles.createSiteLabel}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles.createSiteInput}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title" className={styles.createSiteLabel}>
            Title
          </label>
          <input
            type="text"
            name="title"
            className={styles.createSiteInput}
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price" className={styles.createSiteLabel}>
            Price
          </label>
          <input
            type="text"
            name="price"
            className={styles.createSiteInput}
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="shortDescription" className={styles.createSiteLabel}>
            Short description
          </label>
          <input
            type="text"
            name="shortDescription"
            className={styles.createSiteInput}
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className={styles.createSiteLabel}>
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className={styles.createSiteTextarea}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className={styles.createSiteButton}
          value="Create"
        />
      </form>
    </div>
  );
};

