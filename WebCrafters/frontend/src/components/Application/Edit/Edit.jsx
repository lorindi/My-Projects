import { useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { toast } from "react-toastify";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [site, setSite] = useState({
    image: "",
    title: "",
    price: "",
    shortDescription: "",
    description: "",
  });

  useEffect(() => {
    siteService.getOne(id).then((result) => {
      setSite(result);
    });
  }, [id]);

  const editSiteSubmitHandler = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));

    // Проверка за image
    if (!values.image.startsWith("https://")) {
      toast.error("Image URL should start with 'https://'", {
        style: {
          background: "#152534", 
        },
      });
      return;
    }

    // Проверка за title
    if (values.title.length < 3) {
      toast.error("Title should be at least 3 characters long", {
        style: {
          background: "#152534", 
        },
      });
      return;
    }

    // Проверка за price
    const parsedPrice = parseFloat(values.price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      toast.error("Price should be a number greater than 0", {
        style: {
          background: "#152534", 
        },
      });
      return;
    }

    // Проверка за shortDescription
    if (values.shortDescription.length < 5) {
      toast.error("Short description should be at least 5 characters long", {
        style: {
          background: "#152534", 
        },
      });
      return;
    }

    // Проверка за description
    if (values.description.length < 10) {
      toast.error("Description should be at least 10 characters long", {
        style: {
          background: "#152534", 
        },
      });
      return;
    }

    try {
      await siteService.edit(id, values);
      navigate("/sites");
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (e) => {
    setSite((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.containerEditForm}>
    <h1>Edit Site</h1>
      <form
        onSubmit={editSiteSubmitHandler}
        className={styles.editForm}
        method="post"
        action=""
      >
        <div>
          <label htmlFor="image" className={styles.editSiteLabel}>
            Image
          </label>
          <input
            type="text"
            name="image"
            value={site.image}
            onChange={onChange}
            className={styles.editSiteInput}
            placeholder="Must start with https://"
          />
        </div>
        <div>
          <label htmlFor="title" className={styles.editSiteLabel}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={site.title}
            onChange={onChange}
            className={styles.editSiteInput}
            placeholder="At least three characters"

          />
        </div>

        <div>
          <label htmlFor="price" className={styles.editSiteLabel}>
            Price
          </label>
          <input
            type="text"
            name="price"
            value={site.price}
            onChange={onChange}
            className={styles.editSiteInput}
            placeholder="Greater than zero"

          />
        </div>
        <div>
          <label htmlFor="shortDescription" className={styles.editSiteLabel}>
            Short description
          </label>
          <input
            type="text"
            name="shortDescription"
            value={site.shortDescription}
            onChange={onChange}
            className={styles.editSiteInput}
            placeholder="At least five characters"
          />
        </div>
        <div>
          <label htmlFor="description" className={styles.editSiteLabel}>
            Description
          </label>
          <textarea
            name="description"
            value={site.description}
            onChange={onChange}
            rows="4"
            cols="50"
            className={styles.editSiteTextarea}
            placeholder="At least ten characters"

          />
        </div>

        <button className={styles.editSiteButton}>Edit</button>
      </form>
    </div>
  );
};
