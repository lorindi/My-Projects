import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="content regular">
      <section className="authentication-page register-page page-wrapper">
        {/* <header className="authentication-page-header"></header> */}

        <section className="register-page-form-authentication register-page-form block glow">
          <header className="register-page-form-authentication-header register-page-form">
            <article className="register-page-form-authentication-header-login">
              <span>
                <Link to="/login">Login</Link>
              </span>
            </article>
            <article className="register-page-form-authentication-header-register">
              <span>
                <Link to="/register">Register</Link>
              </span>
            </article>
          </header>
          <article className="register-page-form-subtitle register-page-form">
            <h3>Welcome to LorinDi!</h3>
            <p>Its time to begin our daring adventure.</p>
          </article>
          <form action="" className="register-page-form-content">
            <div className="section-username-email-password">
              <div className="forms input-box">
                <input
                  className="forms-input"
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
                <span>Username</span>
              </div>

              <div className="forms input-box">
                <input
                  className="forms-input"
                  type="text"
                  id="password"
                  name="password"
                  required="required"
                />
                <span>Password</span>
              </div>
            </div>

            <div className="button-section">
              <div className="button">
                {/* <label htmlFor=""></label> */}
                <input
                  className="button"
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
