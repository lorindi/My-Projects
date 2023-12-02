import { useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";

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
            className={styles.editSiteInput}
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
          />
        </div>

        <button className={styles.editSiteButton}>Edit</button>
      </form>
    </div>
  );
};
