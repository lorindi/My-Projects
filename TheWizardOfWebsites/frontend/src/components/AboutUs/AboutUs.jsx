import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const AboutUs = () => {
  const descriptionRef = useRef(null);
  const span = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (descriptionRef.current && span.current) {
      const description = descriptionRef.current.textContent;
      const descriptionLength = description.length;
      const descriptionElement = descriptionRef.current;
      descriptionElement.style.display = "none";

      if (currentIndex < descriptionLength) {
        const currentChar = description[currentIndex];
        span.current.textContent += currentChar;
        setCurrentIndex(currentIndex + 1);
      }
    }
  }, [currentIndex]);

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
      <div className="whole-team">
        <section className="part-team first-section light">
          <img
            className="part-team-img"
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <div className="about">
            <h1 className="part-team-title">Lora Mitova</h1>
            <div className="part-team-info">
              <Link className="info-link light" to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf">
              <i className="fa-solid fa-circle-info"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi">
              <i className="fa-brands fa-github fa-fade"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum">
              <i className="fa-solid fa-certificate"></i>
              </Link>
            </div>
  
            <p
              className="part-team-description"
              id="animated-text"
              ref={descriptionRef}
            >
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
            <span className="text" ref={span}></span>
            
          </div>
        </section>
        <section className="part-team second-section light">
          <img
            className="part-team-img"
            src="/images/pngwing.com (8).png"
            alt=""
          />
          <div className="about">
            <h1 className="part-team-title">Lily Klecharova</h1>
            <div className="part-team-info">
              <Link className="info-link light" to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf">
              <i className="fa-solid fa-circle-info"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi">
              <i className="fa-brands fa-github"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum">
              <i className="fa-solid fa-certificate"></i>
              </Link>
            </div>
            <p className="part-team-description" id="animated-text" >
              Lili Klecharova is a passionate expert in JavaScript technology,
              with extensive knowledge and experience in programming with this
              language. She stands out with her strong analytical skills and her
              ability to solve complex tasks effortlessly using JavaScript. Lili
              has rich experience in creating web applications and dynamic
              websites, utilizing technologies like React and Node.js. She
              combines creativity with technical proficiency to craft functional
              and innovative solutions for her projects. With Lili Klecharova on
              board, every JavaScript-related development receives her expert
              touch and attention to detail.
            </p>
            <span className="text"></span>
            
          </div>
        </section>
        <section className="part-team third-section light">
          <img
            className="part-team-img"
            src="/images/pngwing.com (9).png"
            alt=""
          />
          <div className="about">
            <h1 className="part-team-title">Plamen Angelov</h1>
            <div className="part-team-info">
              <Link className="info-link light" to="https://github.com/lorindi/CVLora-Mitova/blob/main/Lora's%20Resume.pdf">
              <i className="fa-solid fa-circle-info"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi">
              <i className="fa-brands fa-github"></i>
              </Link>
              <Link className="info-link light" to="https://github.com/lorindi/Certificates-from-the-software-engineering-curriculum">
              <i className="fa-solid fa-certificate"></i>
              </Link>
            </div>
            <p className="part-team-description" id="animated-text">
              Plamen Angelov is an experienced specialist in the field of Python
              technology, with significant knowledge and skills in artificial
              intelligence (AI) programming. He possesses a broad understanding
              of machine learning and data processing, enabling him to develop
              complex AI solutions. Plamen is actively involved in projects that
              use Python to create intelligent systems and algorithms. He is
              passionate about continuous learning and actively follows
              technological advancements to stay up to date with the latest
              trends and innovations in the field of AI. With his high level of
              expertise and dedication, Plamen Angelov is a key player in the
              world of artificial intelligence, using Python as a tool to
              achieve his goals.
            </p>
            <span className="text"></span>
            
          </div>
        </section>
      </div>
    </>
  );
};
