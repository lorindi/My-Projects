import { useState, useEffect } from "react";
import "./Certificates.scss";

import TypeScript from "./TypeScript - April 2024 - Certificate.jpeg";
import ReactJs from "./ReactJS - October 2023 - Certificate.jpeg";
import JSFrontEnd from "./JS Front-End - February 2023 - Certificate.jpeg";
import htmlCss from "./HTML & CSS - January 2023 - Certificate.jpeg";
import PythonWebFramework from "./Python Web Framework - June 2023 - Certificate.jpeg";
import PythonWebBasics from "./Python Web Basics - May 2023 - Certificate.jpeg";
import PythonOop from "./Python OOP - October 2022 - Certificate.jpeg";
import PythonAdvanced from "./Python Advanced - September 2022 - Certificate.jpeg";
import November from "./VueJS - November 2024 - Certificate.jpeg";
import PythonBasics from "./Programming Basics - October 2021 - Certificate.jpeg";
import PythonFundamentals from "./Programming Fundamentals with Python - May 2022 - Certificate.jpeg";
import SoftwareEngineerWithPython from "./Diploma for Software Engineer with Python.jpeg";

const ArrowLeftSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19L8 12L15 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5L16 12L9 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const certificatesData = [
      {
        id: 1,
        title: "TypeScript",
        issuer: "SoftUni",
        date: "2024",
        image: TypeScript,
        pdfUrl: "/certificates/TypeScript - April 2024 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/215498/d68ac7d7",
      },
      {
        id: 2,
        title: "React",
        issuer: "SoftUni",
        date: "October 2023",
        image: ReactJs,
        pdfUrl: "/certificates/ReactJS - October 2023 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/197736/bee59b2a",
      },
      {
        id: 3,
        title: "JS Front-End",
        issuer: "SoftUni",
        date: "February 2023",
        image: JSFrontEnd,
        pdfUrl: "/certificates/JS Front-End - February 2023 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/170702/e4ebec81",
      },
      {
        id: 4,
        title: "HTML & CSS",
        issuer: "SoftUni",
        date: "January 2023",
        image: htmlCss,
        pdfUrl: "/certificates/HTML & CSS - January 2023 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/182398/8fa320ee",
      },
      {
        id: 5,
        title: "Python Web Framework",
        issuer: "SoftUni",
        date: "June 2023",
        image: PythonWebFramework,
        pdfUrl:
          "/certificates/Python Web Framework - June 2023 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/182398/8fa320ee",
      },
      {
        id: 6,
        title: "Python Web Basics",
        issuer: "SoftUni",
        date: "May 2023",
        image: PythonWebBasics,
        pdfUrl: "/certificates/Python Web Basics - May 2023 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/177869/ae364f64",
      },
      {
        id: 7,
        title: "Python OOP",
        issuer: "SoftUni",
        date: "October 2022",
        image: PythonOop,
        pdfUrl: "/certificates/Python OOP - October 2022 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/150379/778f00f2",
      },
      {
        id: 8,
        title: "Python Advanced",
        issuer: "SoftUni",
        date: "September 2022",
        image: PythonAdvanced,
        pdfUrl:
          "/certificates/Python Advanced - September 2022 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/152067/65987736",
      },
      {
        id: 9,
        title: "VueJS",
        issuer: "SoftUni",
        date: "November 2024",
        image: November,
        pdfUrl: "/certificates/VueJS - November 2024 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/235119/5259e69e",
      },
      {
        id: 10,
        title: "Python Basics",
        issuer: "SoftUni",
        date: "October 2021",
        image: PythonBasics,
        pdfUrl:
          "/certificates/Programming Basics - October 2021 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/118302/075f9e34",
      },
      {
        id: 11,
        title: "Python Fundamentals",
        issuer: "SoftUni",
        date: "May 2022",
        image: PythonFundamentals,
        pdfUrl:
          "/certificates/Programming Fundamentals with Python - May 2022 - Certificate.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/138727/619b3e82",
      },
      {
        id: 12,
        title: "Software Engineer with Python",
        issuer: "SoftUni",
        date: "2023",
        image: SoftwareEngineerWithPython,
        pdfUrl: "/certificates/Diploma for Software Engineer with Python.pdf",
        originalUrl: "https://softuni.bg/Certificates/Details/198244/a97372ae",
      },
    ];

    setCertificates(certificatesData);
    setIsLoading(false);
    console.log("Certificates data loaded", certificatesData.length);
  }, []);

  const handleImageError = (id) => {
    console.log("Image failed to load for certificate:", id);
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const openModal = (index) => {
    console.log("Opening modal with index:", index);
    setCurrentIndex(index);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
    document.body.style.overflow = "auto";
    setIsZoomed(false);
    setZoomLevel(1);
  };

  const nextCertificate = (e) => {
    e.stopPropagation();
    console.log("Moving to next certificate");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    setIsZoomed(false);
    setZoomLevel(1);
  };

  const prevCertificate = (e) => {
    e.stopPropagation();
    console.log("Moving to previous certificate");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
    setIsZoomed(false);
    setZoomLevel(1);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    console.log("Toggling zoom state:", !isZoomed);
    setIsZoomed(!isZoomed);

    if (!isZoomed) {
      setZoomPosition({ x: 50, y: 50 });
      setZoomLevel(2.5);
    } else {
      setZoomLevel(1);
    }
  };

  const handleZoomMove = (e) => {
    if (!isZoomed) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("Zoom position updated:", { x, y });
    setZoomPosition({ x, y });
  };

  const handleZoomWheel = (e) => {
    if (!isZoomed) return;
    e.preventDefault();

    const delta = e.deltaY * -0.01;
    const newZoomLevel = Math.max(1, Math.min(5, zoomLevel + delta));

    console.log("Zoom level updated:", newZoomLevel);
    setZoomLevel(newZoomLevel);
  };

  const displayedCertificates = certificates.slice(0, 3);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;

      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        setIsZoomed(false);
        setZoomLevel(1);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + certificates.length) % certificates.length
        );
        setIsZoomed(false);
        setZoomLevel(1);
      } else if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
          setZoomLevel(1);
        } else {
          closeModal();
        }
      } else if (e.key === "+" || e.key === "=") {
        if (showModal) {
          setIsZoomed(true);
          setZoomLevel((prev) => Math.min(5, prev + 0.5));
        }
      } else if (e.key === "-") {
        if (showModal && isZoomed) {
          const newLevel = zoomLevel - 0.5;
          if (newLevel <= 1) {
            setIsZoomed(false);
            setZoomLevel(1);
          } else {
            setZoomLevel(newLevel);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, certificates.length, isZoomed, zoomLevel]);

  const CertificateThumb = ({ certificate, index, onClick }) => (
    <div className="certificate-card" onClick={() => onClick(index)}>
      <div className="certificate-image-container">
        {imageError[certificate.id] ? (
          <div className="certificate-placeholder">
            <i className="certificate-icon fas fa-certificate"></i>
            <span>Click to view</span>
          </div>
        ) : (
          <img
            src={certificate.image}
            alt={`${certificate.title} Certificate`}
            className="certificate-image"
            onError={() => handleImageError(certificate.id)}
          />
        )}
      </div>
      <div className="certificate-info">
        <h3 className="certificate-title">{certificate.title}</h3>
        <p className="certificate-issuer">
          {certificate.issuer} - {certificate.date}
        </p>
      </div>
    </div>
  );

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <h2 className="certificates-title">My Certificates</h2>
        <div className="certificates-underline"></div>
        <p className="certificates-description">
          Professional certifications that validate my skills and knowledge in
          various technologies
        </p>

        {isLoading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <>
            <div className="certificates-grid">
              {displayedCertificates.map((certificate, index) => (
                <CertificateThumb
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                  onClick={openModal}
                />
              ))}
            </div>

            <button className="view-all-button" onClick={() => openModal(0)}>
              View All Certificates ({certificates.length})
            </button>
          </>
        )}

        {showModal && (
          <div className="certificate-modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="certificate-carousel">
                <button
                  className="carousel-nav prev"
                  onClick={prevCertificate}
                  aria-label="Previous certificate"
                >
                  <ArrowLeftSVG />
                </button>

                <div className="certificate-display">
                  <div className="certificate-header">
                    <h3 className="modal-certificate-title">
                      {certificates[currentIndex]?.title}
                    </h3>
                    <p className="modal-certificate-issuer">
                      {certificates[currentIndex]?.issuer} -{" "}
                      {certificates[currentIndex]?.date}
                    </p>
                  </div>

                  <div
                    className={`certificate-frame ${isZoomed ? "zoomed" : ""}`}
                    onClick={toggleZoom}
                    onMouseMove={handleZoomMove}
                    onWheel={handleZoomWheel}
                  >
                    {imageError[certificates[currentIndex]?.id] ? (
                      <div className="certificate-placeholder large">
                        <i className="certificate-icon-large fas fa-award"></i>
                        <span>Certificate Preview</span>
                      </div>
                    ) : (
                      <div className="certificate-image-wrapper">
                        <img
                          src={certificates[currentIndex]?.image}
                          alt={`${certificates[currentIndex]?.title} Certificate`}
                          className={`certificate-image-large ${
                            isZoomed ? "zoomed" : ""
                          }`}
                          onError={() =>
                            handleImageError(certificates[currentIndex]?.id)
                          }
                          style={
                            isZoomed
                              ? {
                                  transform: `scale(${zoomLevel})`,
                                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                }
                              : {}
                          }
                        />
                        {isZoomed && (
                          <div className="zoom-instructions">
                            <span>
                              Use the mouse for navigation • The wheel for
                              zooming • ESC for exit
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    {!isZoomed &&
                      !imageError[certificates[currentIndex]?.id] && (
                        <div className="zoom-hint">
                          <i className="fas fa-search-plus"></i>
                          {/* <span>Click to zoom</span> */}
                        </div>
                      )}
                  </div>

                  <div className="certificate-actions">
                    <a
                      href={certificates[currentIndex]?.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-button download-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-file-pdf"></i> Open PDF
                    </a>

                    {certificates[currentIndex]?.originalUrl && (
                      <a
                        href={certificates[currentIndex]?.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-button original-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i> View
                        Original
                      </a>
                    )}

                    <button
                      className="certificate-button zoom-button"
                      onClick={toggleZoom}
                    >
                      <i
                        className={`fas fa-${
                          isZoomed ? "search-minus" : "search-plus"
                        }`}
                      ></i>
                      {isZoomed ? "Exit Zoom" : "Zoom In"}
                    </button>
                  </div>

                  <div className="certificate-navigation">
                    <div className="certificate-counter">
                      <span className="current-index">{currentIndex + 1}</span>
                      <span className="total-count">
                        / {certificates.length}
                      </span>
                    </div>

                    <div className="certificate-thumbnails">
                      {certificates.map((cert, idx) => (
                        <div
                          key={cert.id}
                          className={`thumbnail ${
                            idx === currentIndex ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(idx);
                            setIsZoomed(false);
                            setZoomLevel(1);
                          }}
                          aria-label={`Go to certificate ${idx + 1}`}
                        >
                          <span className="thumbnail-dot"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-nav next"
                  onClick={nextCertificate}
                  aria-label="Next certificate"
                >
                  <ArrowRightSVG />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
