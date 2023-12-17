import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../AboutUs.module.css";
import imgLora from "./Lora.jpg";
import imgTonika from "./Tonika.jpg";
import imgLily from "./Lily.jpg";
import imgMariela from "./Mariela.jpg";
import imgNikola from "./Nikola.jpg";
import imgViktor from "./Viktor.jpg";
import imgPlamen from "./pngwing.com (9).png";


export const OurTeam = () => {
  const descriptionRef = useRef(null);
  const lora = useRef(null);
  const tonika = useRef(null);
  const lilly = useRef(null);
  const mariela = useRef(null);
  const nikola = useRef(null);
  const viktor = useRef(null);
  const plamen = useRef(null);
  return (
    <>
      <article className={styles.wholeTeamLinks}>
        <NavLink
          className={styles.nameLink}
          onClick={() => lora.current.scrollIntoView({ behavior: "smooth" })}
        >
          Lora
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => tonika.current.scrollIntoView({ behavior: "smooth" })}
        >
          Tonika
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => lilly.current.scrollIntoView({ behavior: "smooth" })}
        >
          Lilly
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => mariela.current.scrollIntoView({ behavior: "smooth" })}
        >
          Mariela
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => nikola.current.scrollIntoView({ behavior: "smooth" })}
        >
          Nikola
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => viktor.current.scrollIntoView({ behavior: "smooth" })}
        >
          Viktor
        </NavLink>
        <NavLink
          className={styles.nameLink}
          onClick={() => plamen.current.scrollIntoView({ behavior: "smooth" })}
        >
          Plamen
        </NavLink>
      </article>
      <section
        className={`${styles.partTeam} ${styles.firstSection} ${styles.dark}`}
        ref={lora}
      >
        <img
          className={styles.partTeamImg}
          src={imgLora}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Lora</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>

          <p
            className={`${styles.partTeamDescription} ${styles.dark}`}
            ref={descriptionRef}
          >
            Lora Mitova is a passionate and experienced technology expert with
            extensive knowledge of Python and JavaScript. She excels in
            programming and web application development. Furthermore, Lora
            demonstrates exceptional skills in website design, creating visually
            appealing and functional interfaces. Her commitment to continuous
            improvement and innovation makes her a reliable and valuable
            professional in the field of web development. With Lora Mitova on
            board, projects are executed with high efficiency and quality.
          </p>
        </div>
      </section>
      <section
        ref={tonika}
        className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgTonika}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Tonika</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription}>
            Tonika Ivanova is an exceptional specialist in website design,
            possessing a unique sense of aesthetics and functionality. Her web
            designs are characterized by creativity and attention to detail,
            always creating visually impressive and easily navigable interfaces.
            With extensive experience in website creation, Tonika combines
            colors, fonts, and images in a way that attracts users and keeps
            them engaged in the virtual space. Her design talent is complemented
            by her practical ability to turn concepts into beautiful and
            functional websites.
          </p>
        </div>
      </section>
      <section
        ref={lilly}
        className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgLily}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Lilly</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription}>
            Lilly Klecharova is a passionate expert in JavaScript technology,
            with extensive knowledge and experience in programming with this
            language. She stands out with her strong analytical skills and her
            ability to solve complex tasks effortlessly using JavaScript. Lilly
            has rich experience in creating web applications and dynamic
            websites, utilizing technologies like React and Node.js. With Lilly
            Klecharova on board, every JavaScript-related development receives
            her expert touch and attention to detail.
          </p>
        </div>
      </section>
      <section
        ref={mariela}
        className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgMariela}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Mariela</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription}>
            Mariela Nikolova is a versatile and resourceful IT enthusiast who
            has traversed through the realms of C#, Java, and more. Her hands-on
            experience includes crafting web applications using Java, where
            access to resources from Fundamentals in Java proved invaluable,
            streamlining the understanding of web applications and CRUD
            operations. Beyond the realms of Java, Mariela has delved into the
            dynamic world of JavaScript, navigating its intricacies, while also
            venturing into the realm of WordPress, showcasing a continuous
            pursuit of knowledge and adaptation to evolving technologies.
          </p>
        </div>
      </section>
      <section
        ref={nikola}
        className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgNikola}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Nikola</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription}>
            Nikola Hadzhiev is a dedicated and skilled IT professional who has
            delved into the realms of C# and JavaScript, showcasing proficiency
            in both languages. His previous experience as a junior automation
            developer using UiPath and C# has equipped him with practical skills
            in streamlining workflows. Currently focusing on cloud technology
            development, Nikola is navigating the complexities of distributed
            systems, mastering the interplay between server and client
            components. As he advances in his cloud technology journey, Nikola s
            determination and adaptability position him as a promising force in
            the evolving landscape of IT.
          </p>
        </div>
      </section>
      <section
        ref={viktor}
        className={`${styles.partTeam} ${styles.thirdSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgViktor}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Viktor</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription} id="animated-text">
            Viktor Mavrov is a proficient expert in Cisco networking, Windows
            System Administration, Compromising Platforms, and System and
            Network Compromising. His extensive knowledge and hands-on
            experience make him a valuable asset in the realm of cybersecurity.
            Viktor is actively engaged in training programs focused on Open
            Source and Threat Intelligence, showcasing his commitment to staying
            at the forefront of the ever-evolving security landscape. With his
            expertise in diverse areas, Viktor Mavrov plays a crucial role in
            enhancing cybersecurity practices and defending against emerging
            threats.
          </p>
        </div>
      </section>
      <section
        ref={plamen}
        className={`${styles.partTeam} ${styles.thirdSection} ${styles.dark}`}
      >
        <img
          className={styles.partTeamImg}
          src={imgPlamen}
          alt=""
        />
        <div className={styles.about}>
          <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Plamen</h1>
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
            >
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
            >
              <i
                className="fa-solid fa-certificate"
                style={{ color: "rgba(0, 255, 255, 0.484)" }}
              ></i>
            </Link>
          </div>
          <p className={styles.partTeamDescription} id="animated-text">
            Plamen Angelov is an experienced specialist in the field of Python
            technology, with significant knowledge and skills in artificial
            intelligence (AI) programming. He possesses a broad understanding of
            machine learning and data processing, enabling him to develop
            complex AI solutions. Plamen is actively involved in projects that
            use Python to create intelligent systems and algorithms. With his
            high level of expertise and dedication, Plamen Angelov is a key
            player in the world of artificial intelligence, using Python as a
            tool to achieve his goals.
          </p>
        </div>
      </section>
    </>
  );
};
