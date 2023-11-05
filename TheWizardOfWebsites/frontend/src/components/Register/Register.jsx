import {Link} from 'react-router-dom'
import styles from './Register.module.css'

// import { Contexts } from '../../contexts/Contexts'
// import { useContext } from 'react';
export const Register = () => {
  // const {} = useContext(Contexts)
  return (
    <div className={`${styles.content} ${styles.regular}`} >
      <section className={`${styles.authenticationPage} ${styles.registerPage} ${styles.pageWrapper}`} >
        <section className={`${styles.registerPageFormAuthentication} ${styles.registerPageForm} ${styles.block} ${styles.glow}`} >
          <header className={`${styles.registerPageFormAuthenticationHeader} ${styles.registerPageForm}`} >
            <article className={styles.registerPageFormAuthenticationHeaderLogin} >
              <span>
                <Link to="/login">Login</Link>
              </span>
            </article>
            <article className={`${styles.registerPageFormAuthenticationHeaderRegister}`}>
              <span>
                <Link to="/register">Register</Link>
              </span>
            </article>
          </header>
          <article className={`${styles.registerPageFormSubtitle} ${styles.registerPageForm}`} >
            <h3>Welcome to LorinDi!</h3>
            <p>Its time to begin our daring adventure.</p>
          </article>

          <form action="" className={`${styles.registerPageFormContent}`}>
            <section className={`${styles.sectionUsernameEmailPassword}`}>
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
                <span>Username</span>
              </div>
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="text"
                  id="email"
                  name="email"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className={`${styles.forms} ${styles.inputBox}`}>
                <input
                  className={styles.formsInput}
                  type="text"
                  id="password"
                  name="password"
                  required="required"
                />
                <span>Password</span>
              </div>
            </section>
            <section className={styles.registerPageFormContentAdditionalConditions}>
              <article>
                <div>
                  <input type="checkbox" id="myCheckbox" />
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
                  <input type="checkbox" id="myCheckbox" />
                  <label htmlFor="">
                    <span>
                      I accept LorinDis
                      <a href="">privacy policy</a>.
                    </span>
                  </label>
                </div>
              </article>
            </section>
            <section className={styles.buttonSection}>
              <div className={styles.button}>
                <label htmlFor=""></label>
                <input
                  className={styles.button}
                  type="submit"
                  id="submit"
                  name="submit"
                />
              </div>
            </section>
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
