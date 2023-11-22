import { Link } from "react-router-dom";
import styles from "./Register.module.css";
// import { useState } from "react";

import { Contexts } from '../../contexts/Contexts'
import { useContext } from 'react';
import { useForm } from "../../hooks/useForm";

const RegisterFormsKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",

}
export const Register = () => {
  const { registerSubmitHandler } = useContext(Contexts)
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormsKeys.Email]: '',
    [RegisterFormsKeys.Password]: '',
    [RegisterFormsKeys.ConfirmPassword]: '',

  })


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

          <form action="" onSubmit={onSubmit} className={`${styles.registerPageFormContent}`}>
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
              />
              <span>Password</span>
            </div>
          </div>
          {/* <div className={styles.registerPageFormContentAdditionalConditions}>
            <article>
              <div>
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  // checked={formData.termsAccepted}
                  // onChange={onChange}
                />
                <label htmlFor="termsAccepted">
                  <span>
                    I accept the <a href="">terms and conditions</a> of LorinDi!
                  </span>
                </label>
              </div>
            </article>
            <article>
              <div>
                <input
                  type="checkbox"
                  id="privacyPolicyAccepted"
                  name="privacyPolicyAccepted"
                  // checked={formData.privacyPolicyAccepted}
                  // onChange={onChange}
                />
                <label htmlFor="privacyPolicyAccepted">
                  <span>
                    I accept LorinDis <a href="">privacy policy</a>.
                  </span>
                </label>
              </div>
            </article>
          </div> */}
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
              <a href="">Login</a>
            </span>
          </article>
        </section>
      </section>
    </div>
  );
};
