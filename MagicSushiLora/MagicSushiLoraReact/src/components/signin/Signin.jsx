import { useState } from "react";
import styles from "./Signin.module.css";
// import { Link } from "react-router-dom";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import coverPic from "../sushiNet/olivia-oliver-design-gd8k67l8nEc-unsplash.jpg";
export const Signin = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(true);

  const handleSignInButtonClick = () => {
    setTimeout(() => {
      setSignIn(true);
      setSignUp(false);
    }, 500); // Adjust the delay time (in milliseconds) as needed
  };

  const handleSignUpButtonClick = () => {
    setTimeout(() => {
      setSignIn(false);
      setSignUp(true);
    }, 500); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <div className={styles.containerSignInSignUp}>
      <div className={styles.contentSignInSignUp}>
        {!signIn && (
          <div className={`${styles.signInContainer}`}>
            <Login />
          </div>
        )}

        {signIn && (
          <div className={styles.authenticationDescriptionSignUp}>
            <div className={styles.authenticationCoverContentImg}>
              <img
                className={styles.authenticationCoverImg}
                src={coverPic}
                alt=""
              />
            </div>
            <div className={styles.authenticationCoverInfo}>
              <h1 className={styles.authenticationCoverTitle}>
                Hello, Friend!
              </h1>
              <p className={styles.authenticationCoverDescription}>
                Enter your personal details and start the journey with us
              </p>
              <button
                className={styles.signUpButtonNavigator}
                onClick={handleSignUpButtonClick}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
        {!signUp && (
        <div className={`${styles.signUpContainer}`}>
          <Register />
        </div>)}

        {signUp && (
          <div className={styles.authenticationDescriptionSignIn}>
            <div className={styles.authenticationCoverContentImg}>
              <img
                className={styles.authenticationCoverImg}
                src={coverPic}
                alt=""
              />
            </div>

            <div className={styles.authenticationCoverInfo}>
              <h1 className={styles.authenticationCoverTitle}>Welcome Back!</h1>
              <p className={styles.authenticationCoverDescription}>
                To keep connected with us, please login with your personal info
              </p>
              <button
                className={styles.signInButtonNavigator}
                onClick={handleSignInButtonClick}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
