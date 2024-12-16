import "./Internship.scss";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FamilyTree from "./Family Tree.png";
import Jauntster from "./Jauntster.png";

const projects = [
  {
    id: 1,
    title: "Family Tree",
    description: "Family Tree is a web application developed with React and Firebase that allows users to create and manage their personalized family trees.",
    image: FamilyTree,
    projectLink: "https://project-30-two.vercel.app/",
    technologies: [
      "React",
      "Material UI",
      "Framer Motion",
      "React Router",
      "Formik",
      "Firebase",
      "D3.js",
      "HTML2Canvas",
      "jsPDF",
      "i18next",
      "EmailJS",
    ],
    teamSize: 7,
  },
  {
    id: 2,
    title: "Jauntster",
    description: "The project is a web application for planning, creating, and sharing personalized travel tours, featuring secure payment integration, intuitive UI, and robust admin controls.",
    image: Jauntster,
    projectLink: "https://self-guided-tour-fe.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "Formik",
      "Yup",
      "Stripe",
      "Framer Motion",
      "Google Maps API",
      "TailwindCSS",
      "ASP.NET",
      "Entity Framework",
      "SQL Server",
      "Figma"
    ],
    teamSize: 7,
  },
];

export const Internship = () => {
  console.log("Rendering Internship component");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const handleProjectClick = (link) => {
    console.log("Opening project link:", link);
    window.open(link, "_blank");
  };

  const renderProjectCard = (project) => {
    return (
      <motion.div
        key={project.id}
        className="projectCard"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          onClick={() => handleProjectClick(project.projectLink)}
          style={{ cursor: "pointer" }}
        />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <p className="teamSize">Team: {project.teamSize} people</p>
        <div className="projectLinks">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleProjectClick(project.projectLink)}
            className="viewProject"
          >
            View Project
          </motion.button>
     
        </div>
      </motion.div>
    );
  };

  return (
    <div className="internship">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Internship Projects
      </motion.h1>

      <motion.div
        className="projectsContainer"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {projects.length > 3 ? (
          <Slider {...settings}>
            {projects.map((project) => renderProjectCard(project))}
          </Slider>
        ) : (
          <div className="projectsGrid">
            {projects.map((project) => renderProjectCard(project))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

