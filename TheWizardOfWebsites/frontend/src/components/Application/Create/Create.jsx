// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";
import * as siteService from "../../../services/applicationService";
import { toast } from "react-toastify";

export const Create = () => {
  const navigate = useNavigate();

  const createSiteSubmitHandler = async (e) => {
    e.preventDefault();

    const siteData = Object.fromEntries(new FormData(e.currentTarget));
    const isEmpty = Object.values(siteData).every(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      toast.error("All fields cannot be empty");
      return;
    }

    // Проверка за image
    if (!siteData.image.startsWith("https://")) {
      toast.error("Image URL should start with 'https://'");
      return;
    }

    // Проверка за title
    if (siteData.title.length < 3) {
      toast.error("Title should be at least 3 characters long");
      return;
    }

    // Проверка за price
    const parsedPrice = parseFloat(siteData.price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      toast.error("Price should be a number greater than 0");
      return;
    }

    // Проверка за shortDescription
    if (siteData.shortDescription.length < 5) {
      toast.error("Short description should be at least 5 characters long");
      return;
    }

    // Проверка за description
    if (siteData.description.length < 10) {
      toast.error("Description should be at least 10 characters long");
      return;
    }

    try {
      await siteService.create(siteData);
      navigate("/sites");
    } catch (err) {
      console.log(err);
    }
  };

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
            name="image"
            className={styles.createSiteInput}
            placeholder="Must start with https://"
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
            placeholder="At least three characters"
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
            placeholder="Greater than zero"
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
            placeholder="At least five characters"
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
            placeholder="At least ten characters"
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
