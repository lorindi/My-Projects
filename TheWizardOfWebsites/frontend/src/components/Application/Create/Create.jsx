// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";
import * as siteService from "../../../services/applicationService";


export const Create = () => {
  const navigate = useNavigate();
  
  const createSiteSubmitHandler = async (e) => {
    e.preventDefault();

    const siteData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await siteService.create(siteData);
      navigate("/sites");
    } catch (err) {
      console.log(err);
    }
  };

  // const [formData, setFormData] = useState({
  //   image: null,
  //   title: "",
  //   price: "",
  //   shortDescription: "",
  //   description: "",
  // });

  // // const history = useHistory();

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "file" ? files[0] : value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={styles.containerCreateForm}>
    <h1>Create Site</h1>
      <form
        // onSubmit={handleSubmit}
        className={styles.createForm}
        onSubmit={createSiteSubmitHandler}
        method="post"
        action=""
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="image" className={styles.createSiteLabel}>
            Image
          </label>
          <input
            type="text"
            // accept="image/*"
            name="image"
            className={styles.createSiteInput}
            // onChange={handleChange}
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
            // value={formData.title}
            // onChange={handleChange}
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
            // value={formData.price}
            // onChange={handleChange}
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
            // value={formData.shortDescription}
            // onChange={handleChange}
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
            // value={formData.description}
            // onChange={handleChange}
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
