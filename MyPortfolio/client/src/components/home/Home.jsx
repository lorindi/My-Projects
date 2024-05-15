import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { More } from "./more/More";
import { Skills } from "./skills/skills/Skills";
import { Works } from "./works/works/Works";
// import Email from '../email/Email'
export const Home = () => {
  return (
    <>
      <header className={styles.headerHome}>
        <nav className={styles.navigationHome}>
          <div className={styles.contentLogoHome}>
            <Link className={styles.logo}>
              <img className={styles.logoImg} src="" alt="" />
              <Link className={styles.link}>Logo</Link>
            </Link>
          </div>
          <div className={styles.contentLinksHome}>
            <Link className={styles.link}>Home</Link>
            <Link className={styles.link}>Skills</Link>
            <Link className={styles.link}>Works</Link>
            <Link className={styles.link}>Resume</Link>
            <Link className={styles.link}>Contact</Link>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <More />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Works />
        </section>
        {/* <Email/> */}
      </main>
      <footer className={styles.footerHome}>
        <p className={styles.titleFooterHome}>Let`s Talk</p>
      </footer>
    </>
  );
};
