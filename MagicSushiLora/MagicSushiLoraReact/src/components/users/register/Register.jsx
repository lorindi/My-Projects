import { useContext, useState } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Register.module.css";
export const Register = () => {
  const { registerSubmitHandler, getFault, clearFault } = useContext(Contexts);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerSubmitHandler(formData);
  };

  return (
    <div className={styles.signUpContainer}>
      <h2 className={styles.registrationFormTitle}>Create Account</h2>
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <div className={styles.contentRegistrationForm}>
          {/* <label className={styles.registrationFormLabel}>Username</label> */}
          <input
            placeholder="Username"
            className={styles.registrationFormInput}
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className={styles.contentRegistrationForm}>
          {/* <label className={styles.registrationFormLabel}>Email</label> */}
          <input
            placeholder="Email"
            className={styles.registrationFormInput}
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.contentRegistrationForm}>
          {/* <label className={styles.registrationFormLabel}>Password</label> */}
          <input
            placeholder="Password"
            className={styles.registrationFormInput}
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className={styles.contentRegistrationForm}>
          {/* <label className={styles.registrationFormLabel}>
            Confirm Password
          </label> */}
          <input
            placeholder="Password"
            className={styles.registrationFormInput}
            type="password"
            value={formData.rePassword}
            onChange={(e) =>
              setFormData({ ...formData, rePassword: e.target.value })
            }
          />
        </div>
        <button className={styles.registrationFormButton} type="submit">Register</button>
      </form>
      {getFault() && (
        <div>
          <p>{getFault()}</p>
          <button onClick={clearFault}>Clear Fault</button>
        </div>
      )}
    </div>
  );
};
