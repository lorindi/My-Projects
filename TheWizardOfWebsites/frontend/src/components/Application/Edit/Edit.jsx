import { useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { useForm } from "../../../hooks/useForm";

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

  const editSiteSubmitHandler = async (values) => {
    try {
      await siteService.edit(id, values);
      navigate("/sites");
    } catch (err) {
      console.log(err);
    }
  };

  const { values, onChange, onSubmit } = useForm(editSiteSubmitHandler, site);

  return (
    <div className={styles.containerEditForm}>
      <form
        onSubmit={onSubmit}
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
            value={values.image}
            className={styles.editSiteInput}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="title" className={styles.editSiteLabel}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={values.title}
            className={styles.editSiteInput}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="price" className={styles.editSiteLabel}>
            Price
          </label>
          <input
            type="text"
            name="price"
            value={values.price}
            className={styles.editSiteInput}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="shortDescription" className={styles.editSiteLabel}>
            Short description
          </label>
          <input
            type="text"
            name="shortDescription"
            value={values.shortDescription}
            className={styles.editSiteInput}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="description" className={styles.editSiteLabel}>
            Description
          </label>
          <textarea
            name="description"
            value={values.description}
            rows="4"
            cols="50"
            className={styles.editSiteTextarea}
            onChange={onChange}
          />
        </div>

        <button className={styles.editSiteButton}>Edit</button>
      </form>
    </div>
  );
};
