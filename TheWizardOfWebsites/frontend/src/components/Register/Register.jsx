import { Link } from "react-router-dom";
import styles from "./Register.module.css";
// import { useState } from "react";

import { Contexts } from "../../contexts/Contexts";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

const RegisterFormsKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};
export const Register = () => {
  const { registerSubmitHandler, getFault, clearFault } = useContext(Contexts);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormsKeys.Email]: "",
    [RegisterFormsKeys.Password]: "",
    [RegisterFormsKeys.ConfirmPassword]: "",
  });
  const handleInputChange = (e) => {
    clearFault();
    onChange(e);

  };
  return (
    <div className={`${styles.content} ${styles.regular}`}>
      <section
        className={`${styles.authenticationPage} ${styles.registerPage} ${styles.pageWrapper}`}
      >
        <section
          className={`${styles.registerPageFormAuthentication} ${styles.registerPageForm} ${styles.block} ${styles.glow}`}
        >
          <header
            className={`${styles.registerPageFormAuthenticationHeader} ${styles.registerPageForm}`}
          >
            <article
              className={styles.registerPageFormAuthenticationHeaderLogin}
            >
              <span>
                <Link to="/login">Login</Link>
              </span>
            </article>
            <article
              className={`${styles.registerPageFormAuthenticationHeaderRegister}`}
            >
              <span>
                <Link to="/register">Register</Link>
              </span>
            </article>
          </header>
          <article
            className={`${styles.registerPageFormSubtitle} ${styles.registerPageForm}`}
          >
            <h3>Welcome to LorinDi!</h3>
            <p>Its time to begin our daring adventure.</p>
          </article>

          <form
            action=""
            onSubmit={onSubmit}
            className={`${styles.registerPageFormContent}`}
          >
            <div className={`${styles.sectionUsernameEmailPassword}`}>
              {/* <div className={`${styles.forms} ${styles.inputBox}`}>
              <input
                className={styles.formsInput}
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={onChange}
              />
              <span>Username</span>
            </div> */}
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="text"
                  id="email"
                  name="email"
                  value={values[RegisterFormsKeys.email]}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="password"
                  id="password"
                  name="password"
                  value={values[RegisterFormsKeys.Password]}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Confirm Password</span>
              </div>
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={values[RegisterFormsKeys.ConfirmPassword]}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Password</span>
              </div>
              {getFault() && <p className={styles.registerError}>{getFault()}</p>}
            </div>

            <div className={styles.buttonSection}>
              <div className={styles.button}>
                <label htmlFor=""></label>
                <input
                  className={styles.button}
                  type="submit"
                  id="submit"
                  name="submit"
                />
              </div>
            </div>
          </form>
          <article className={styles.registerPageFormAlreadyRegistered}>
            <span>You are already registered ?</span>
            <span>
              <Link to="/login">Login</Link>
            </span>
          </article>
        </section>
      </section>
    </div>
  );
};
