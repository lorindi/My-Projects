import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  username: "username",
  password: "password",
};

export const Login = () => {
  const { onLoginSubmit } = useContext(Contexts);
  const { values, onChange, onSubmit} = useForm(
    {
      [LoginFormKeys.username]: "",
      [LoginFormKeys.password]: "",
    },
    onLoginSubmit
  );

  return (
    <div className={`${styles.content}`}>
      <section
        className={`${styles.authenticationPage} ${styles.loginPage} ${styles.pageWrapper}`}
      >
        <section
          className={`${styles.loginPageFormAuthentication} ${styles.loginPageForm} ${styles.block} ${styles.glow} `}
        >
          <header
            className={`${styles.loginPageFormAuthenticationHeader} ${styles.loginPageForm}`}
          >
            <article className={styles.loginPageFormAuthenticationHeaderLogin}>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </article>
            <article
              className={styles.loginPageFormAuthenticationHeaderRegister}
            >
              <span>
                <Link to="/register">Register</Link>
              </span>
            </article>
          </header>
          <article
            className={`${styles.loginPageFormSubtitle} ${styles.loginPageForm}`}
          >
            <h3 className="">Welcome to LorinDi!</h3>
            <p>Its time to begin our daring adventure.</p>
          </article>
          <form
            onSubmit={onSubmit}
            className={`${styles.loginPageFormContent} `}
          >
            <div className={styles.sectionUsernameEmailPassword}>
              <div className={` ${styles.forms} ${styles.inputBox} `}>
                <input
                  className={`${styles.formsInput} `}
                  type="text"
                  id="username"
                  name={LoginFormKeys.username}
                  value={values[LoginFormKeys.username]}
                  onChange={onChange}
                  // required="required"
                />
                <span>Username</span>
              </div>

              <div className={`${styles.forms} ${styles.inputBox} `}>
                <input
                  className={`${styles.formsInput} `}
                  type="text"
                  id="password"
                  name={LoginFormKeys.password}
                  value={values[LoginFormKeys.password]}
                  onChange={onChange}
                  // required="required"
                />
                <span>Password</span>
              </div>
            </div>

            <div className={styles.buttonSection}>
              <div className={`${styles.button} `}>
                {/* <label htmlFor=""></label> */}
                <input
                  className={`${styles.button} `}
                  type="submit"
                  id="submit"
                  name="submit"
                />
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};
