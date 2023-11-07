import styles from "./CreateForm.module.css";
// import { useState } from "react";
export const CreateForm = () => {
  return (
    <div className={styles.containerCreateForm}>
      <form className={styles.createForm} method="post" action="">
        <div>
          <label htmlFor="image" className={styles.createSiteLabel}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles.createSiteInput}
          />
        </div>
        <div>
          <label htmlFor="title" className={styles.createSiteLabel}>
            Title
          </label>
          <input type="text" name="title" className={styles.createSiteInput} />
        </div>

        <div>
          <label htmlFor="price" className={styles.createSiteLabel}>
            Price
          </label>
          <input type="text" name="price" className={styles.createSiteInput} />
        </div>
        <div>
          <label htmlFor="short-description" className={styles.createSiteLabel}>
            Short description
          </label>
          <input
            type="text"
            name="short-description"
            className={styles.createSiteInput}
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
          />
        </div>

        <input type="submit" className={styles.createSiteButton} value="Create"/>
      </form>
    </div>
  );
};
