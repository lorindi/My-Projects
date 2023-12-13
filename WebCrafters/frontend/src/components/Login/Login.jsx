import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";

const LoginFormKeys = {
  email: "email",
  password: "password",
};

export const Login = () => {
  const { onLoginSubmit, getError, clearError } = useContext(Contexts);

  const { values, onChange, onSubmit } = useForm(
    onLoginSubmit,

    {
      [LoginFormKeys.email]: "",
      [LoginFormKeys.password]: "",
    }
  );
  const handleInputChange = (e) => {
    clearError();
    onChange(e);
  };

  const showToastError = () => {
    const errorMessage = getError();
    if (errorMessage) {
      toast.error(errorMessage, {
        style: {
          background: "#152534", 
        },
      });
    }
  };

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
            onSubmit={(e) => {
              onSubmit(e);
              showToastError(); // Show toast error after form submission
            }}
            className={`${styles.loginPageFormContent} `}
          >
            <div className={styles.sectionUsernameEmailPassword}>
              <div className={` ${styles.forms} ${styles.inputBox} `}>
                <input
                  className={`${styles.formsInput} `}
                  type="text"
                  id="email"
                  name={LoginFormKeys.email}
                  value={values[LoginFormKeys.email]}
                  onChange={handleInputChange}
                  // onChange={onChange}
                  required="required"
                />
                <span>Email</span>
              </div>

              <div className={`${styles.forms} ${styles.inputBox} `}>
                <input
                  className={`${styles.formsInput} `}
                  type="password"
                  id="password"
                  name={LoginFormKeys.password}
                  value={values[LoginFormKeys.password]}
                  onChange={handleInputChange}
                  // onChange={onChange}
                  required="required"
                />
                <span>Password</span>
              </div>
              {getError() && <p className={styles.loginError}>{getError()}</p>}
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
