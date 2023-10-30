import {Link} from 'react-router-dom'

export const Register = () => {
  return (
    <div className="content regular">
      <section className="authentication-page register-page page-wrapper">
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
            <section className="section-username-email-password">
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
                  id="email"
                  name="email"
                  required="required"
                />
                <span>Email</span>
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
            </section>
            <section className="register-page-form-content-additional-conditions">
              <article>
                <div>
                  <input type="checkbox" id="my-checkbox" />
                  <label htmlFor="">
                    <span>
                      I accept the <a href="">terms and conditions</a> of
                      LorinDi!
                    </span>
                  </label>
                </div>
              </article>
              <article>
                <div>
                  <input type="checkbox" id="my-checkbox" />
                  <label htmlFor="">
                    <span>
                      I accept LorinDis
                      <a href="">privacy policy</a>.
                    </span>
                  </label>
                </div>
              </article>
            </section>
            <section className="button-section">
              <div className="button">
                <label htmlFor=""></label>
                <input
                  className="button"
                  type="submit"
                  id="submit"
                  name="submit"
                />
              </div>
            </section>
          </form>
          <article className="register-page-form-already-registered">
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
