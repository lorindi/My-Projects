import styles from "./Edit.module.css";
// import { useState } from "react";
export const Edit = () => {
  return (
    <div className={styles.containerEditForm}>
      <form className={styles.editForm} method="post" action="">
        <div>
          <label htmlFor="image" className={styles.editSiteLabel}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles.editSiteInput}
          />
        </div>
        <div>
          <label htmlFor="title" className={styles.editSiteLabel}>
            Title
          </label>
          <input type="text" name="title" className={styles.editSiteInput} />
        </div>

        <div>
          <label htmlFor="price" className={styles.editSiteLabel}>
            Price
          </label>
          <input type="text" name="price" className={styles.editSiteInput} />
        </div>
        <div>
          <label htmlFor="short-description" className={styles.editSiteLabel}>
            Short description
          </label>
          <input
            type="text"
            name="short-description"
            className={styles.editSiteInput}
          />
        </div>
        <div>
          <label htmlFor="description" className={styles.editSiteLabel}>
            Description
          </label>
          <textarea
            name="description"
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