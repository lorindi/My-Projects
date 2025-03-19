import { useState, useRef } from "react";
import "./Recommendations.scss";
import Job_Recommendation_Lora from "./Лора Митова Препоръка.pdf";
import Job_Recommendation_Hristo from "./Job Recomendation- Lory.pdf";


const Recommendations = () => {
  console.log("Rendering Recommendations component");
  
  const [activeIndex, setActiveIndex] = useState(0);
  const recommendationsRef = useRef(null);
  
  const recommendations = [
    {
      id: 1,
      name: "Zhivko Uzunov",
      position: "Team Lead at Jauntster",
      company: "Cost-Effective Solutions",
      contact: "0898702676",
      email: "jivko214@gmail.com",
      pdfFile: Job_Recommendation_Lora,
      content: `This recommendation is issued to Lora Mitova as part of the Jauntster team
      (Front-End)
      
      Lora played a key role in the project's success by taking responsibility for developing
      Jauntster's user interface. She demonstrated not only deep technical skills but also
      genuine passion for creating an intuitive and attractive user interface. Lora paid
      great attention to details, which resulted in smooth and seamless platform navigation,
      as well as visual aesthetics that attract and retain users.
      
      One of Lora's major achievements was implementing a dynamic and adaptive design that
      ensured optimal user experience on both desktop and mobile devices. She successfully
      integrated new functionalities into the platform while continuously seeking ways to
      optimize code for faster loading and lower resource usage. This significantly improved
      the web application's performance and contributed to positive user feedback.
      
      Lora also actively participated in discussions of new ideas and wasn't afraid to propose
      innovative solutions to various challenges that arose during development. She worked
      closely with the UX/UI designer to ensure the best implementation of design concepts,
      while maintaining open communication with other team members, which facilitated the
      integration process between different system components.
      
      Her professional attitude and commitment not only contributed to the high quality of
      the final product but also increased team motivation as a whole. Lora was always ready
      to help her colleagues and share her knowledge, creating an environment of collaboration
      and continuous learning in the team. She is a valuable team member and her efforts
      deserve high appreciation and recognition.`
    },
    {
      id: 2,
      name: "Hristo Ganchev",
      position: "Project Team Lead – ERP for SRV",
      company: "Cost-Effective Solutions Program",
      contact: "0883479646",
      pdfFile: Job_Recommendation_Hristo,
      content: `I am pleased to recommend Lora Mitova as a developer with excellent technical skills and
      a drive for high results. During our collaboration, she demonstrated responsibility,
      professionalism, and the ability to work effectively in a team, actively contributing
      to the project's success.
      
      Lora possesses strong skills in React.js development, being able to build well-structured,
      efficient, and reusable components. She shows understanding of API communication,
      works confidently with RESTful APIs, and knows how to optimize requests for better
      performance.
      
      Besides her technical skills, Lora follows UI/UX guidelines, striving to build interfaces
      that are both functional and user-friendly. She adheres to given requirements and
      specifications, ensuring that the final result meets project expectations.
      
      Lora is extremely organized, communicative, and proactive. She helps her colleagues
      while constantly seeking ways to improve her own skills. The only area where she could
      focus more is on better task prioritization and clearer formulation of problems and
      solutions to facilitate team collaboration.
      
      I recommend Lora for positions requiring a React.js developer who works effectively with
      APIs, follows UI/UX principles, and adheres to technical specifications. With a bit more
      focus on structuring the work process, she has the potential to become a leading
      specialist in frontend development.`
    },
    
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleViewPdf = () => {
    window.open(recommendations[activeIndex].pdfFile, "_blank");
  };

  return (
    <section className="recommendations-section" ref={recommendationsRef}>
      <div className="recommendations-container">
        <h2 className="recommendations-title">Recommendations</h2>
        <div className="recommendations-underline"></div>
        
        <div className="recommendations-carousel">
          <div className="recommendation-card">
            <div className="recommendation-header">
              <h3 className="recommender-name">{recommendations[activeIndex].name}</h3>
              <p className="recommender-position">{recommendations[activeIndex].position}</p>
              <p className="recommender-company">{recommendations[activeIndex].company}</p>
            </div>
            
            <div className="recommendation-content">
              <div className="quote-icon">"</div>
              <p className="recommendation-text">
                {recommendations[activeIndex].content}
              </p>
              <div className="quote-icon closing-quote">"</div>
            </div>
            
            <div className="recommendation-footer">
              <p className="recommender-contact">
                {recommendations[activeIndex].contact}
                {recommendations[activeIndex].email && ` | ${recommendations[activeIndex].email}`}
              </p>
              
              <button className="view-pdf-btn" onClick={handleViewPdf}>
                <i className="fas fa-file-pdf"></i> View Original PDF
              </button>
            </div>
          </div>
          
          <div className="recommendation-controls">
            <button className="control-btn prev-btn" onClick={handlePrevious}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="recommendation-dots">
              {recommendations.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
            
            <button className="control-btn next-btn" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;