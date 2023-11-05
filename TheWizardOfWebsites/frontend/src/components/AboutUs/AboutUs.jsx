import styles from "./AboutUs.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
export const AboutUs = () => {
  const descriptionRef = useRef(null);
  const span = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (descriptionRef.current && span.current) {
  //     const description = descriptionRef.current.textContent;
  //     const descriptionLength = description.length;
  //     const descriptionElement = descriptionRef.current;
  //     descriptionElement.style.display = "none";

  //     if (currentIndex < descriptionLength) {
  //       const currentChar = description[currentIndex];
  //       span.current.textContent += currentChar;
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   }
  // }, [currentIndex]);

  // useEffect(() => {
  //   firstDescriptionRef.current.style.display = "none";
  //   console.log(firstDescriptionRef.current.textContent.length);
  // if (firstDescriptionRef.current) {
  //   Добавете стилове към първия елемент
  //   firstDescriptionRef.current.style.color = 'red';
  //   При компонентът да се зареди, можем да извършим манипулации с референциите
  //   if (firstDescriptionRef.current && secondDescriptionRef.current) {
  //     Например, промяна на текста на първия елемент
  //     firstDescriptionRef.current.textContent = 'Нов текст за първия елемент';
  //     Например, добавяне на текст към втория елемент
  //     secondDescriptionRef.current.textContent = 'Текст, добавен към втория елемент';
  //   }
  // }, []);

  return (
    <>
      <div className={styles.wholeTeam}>
        <section
          className={`${styles.partTeam} ${styles.firstSection} ${styles.dark}`}
        >
          <img
            className={styles.partTeamImg}
            src="../../../src/components/AboutUs/pngwing.com (8).png"
            alt=""
          />
          <div className={styles.about}>
            <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Lora</h1>
            <div className={styles.partTeamInfo}>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
              >
                <i className="fa-solid fa-circle-info" style={({color: "rgba(0, 255, 255, 0.484)"})} ></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi"
              >
                <i className="fa-brands fa-github" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
              >
                <i className="fa-solid fa-certificate" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
            </div>

            <p className={`${styles.partTeamDescription} ${styles.dark}`} ref={descriptionRef}>
              Lora Mitova is a passionate and experienced technology expert with
              extensive knowledge of Python and JavaScript. She excels in
              programming and web application development. Furthermore, Lora
              demonstrates exceptional skills in website design, creating
              visually appealing and functional interfaces. Her commitment to
              continuous improvement and innovation makes her a reliable and
              valuable professional in the field of web development. With Lora
              Mitova on board, projects are executed with high efficiency and
              quality.
            </p>
            <span className={styles.text} ref={span}></span>
          </div>
        </section>
        <section
          className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
        >
          <img
            className={styles.partTeamImg}
            src="../../../src/components/AboutUs/pngwing.com (8).png"
            alt=""
          />
          <div className={styles.about}>
            <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Tonika</h1>
            <div className={styles.partTeamInfo}>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
              >
                <i className="fa-solid fa-circle-info" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi"
              >
                <i className="fa-brands fa-github" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
              >
                <i className="fa-solid fa-certificate" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
            </div>
            <p className={styles.partTeamDescription}>
              Tonika Ivanova is an exceptional specialist in website design,
              possessing a unique sense of aesthetics and functionality. Her web
              designs are characterized by creativity and attention to detail,
              always creating visually impressive and easily navigable
              interfaces. With extensive experience in website creation, Tonika
              combines colors, fonts, and images in a way that attracts users
              and keeps them engaged in the virtual space. Her design talent is
              complemented by her practical ability to turn concepts into
              beautiful and functional websites.
            </p>
            <span className={styles.text}></span>
          </div>
        </section>
        <section
          className={`${styles.partTeam} ${styles.secondSection} ${styles.dark}`}
        >
          <img
            className={styles.partTeamImg}
            src="../../../src/components/AboutUs/pngwing.com (8).png"
            alt=""
          />
          <div className={styles.about}>
            <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Lily</h1>
            <div className={styles.partTeamInfo}>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
              >
                <i className="fa-solid fa-circle-info" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi"
              >
                <i className="fa-brands fa-github" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
              >
                <i className="fa-solid fa-certificate" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
            </div>
            <p className={styles.partTeamDescription}>
              Lili Klecharova is a passionate expert in JavaScript technology,
              with extensive knowledge and experience in programming with this
              language. She stands out with her strong analytical skills and her
              ability to solve complex tasks effortlessly using JavaScript. Lili
              has rich experience in creating web applications and dynamic
              websites, utilizing technologies like React and Node.js. With Lili
              Klecharova on board, every JavaScript-related development receives
              her expert touch and attention to detail.
            </p>
            <span className={styles.text}></span>
          </div>
        </section>
        <section
          className={`${styles.partTeam} ${styles.thirdSection} ${styles.dark}`}
        >
          <img
            className={styles.partTeamImg}
            src="/images/pngwing.com (9).png"
            alt=""
          />
          <div className={styles.about}>
            <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>Plamen</h1>
            <div className={styles.partTeamInfo}>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf"
              >
                <i className="fa-solid fa-circle-info" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi"
              >
                <i className="fa-brands fa-github" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
              <Link
                className={`${styles.infoLink} ${styles.dark}`}
                to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum"
              >
                <i className="fa-solid fa-certificate" style={({color: "rgba(0, 255, 255, 0.484)"})}></i>
              </Link>
            </div>
            <p className={styles.partTeamDescription} id="animated-text">
              Plamen Angelov is an experienced specialist in the field of Python
              technology, with significant knowledge and skills in artificial
              intelligence (AI) programming. He possesses a broad understanding
              of machine learning and data processing, enabling him to develop
              complex AI solutions. Plamen is actively involved in projects that
              use Python to create intelligent systems and algorithms. With his
              high level of expertise and dedication, Plamen Angelov is a key
              player in the world of artificial intelligence, using Python as a
              tool to achieve his goals.
            </p>
            <span className={styles.text}></span>
          </div>
        </section>
      </div>
    </>
  );
};
