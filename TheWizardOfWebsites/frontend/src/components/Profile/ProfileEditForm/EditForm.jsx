import styles from "./EditForm.module.css";

export const EditForm = () => {
  return (
    <>
      <div className={styles.containerEditForm}>
        <form className={styles.editForm} action="" method="POST">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <input
            className={styles.buttonEditForm}
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
};
