import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Login.module.css";
export const Login = () => {
  const { onLoginSubmit, getError, clearError } = useContext(Contexts);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(formData);
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.loginFormTitle}>Sign in</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.contentLoginForm}>
          {/* <label className={styles.loginFormLabel}>Username</label> */}
          <input
            placeholder="Username"
            className={styles.loginFormInput}
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className={styles.contentLoginForm}>
          {/* <label className={styles.loginFormLabel}>Password</label> */}
          <input
            placeholder="Password"
            className={styles.loginFormInput}
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button className={styles.loginFormButton} type="submit">
          Login
        </button>
      </form>
      {getError() && (
        <div>
          <p>{getError()}</p>
          <button onClick={clearError}>Clear Error</button>
        </div>
      )}
    </div>
  );
};
