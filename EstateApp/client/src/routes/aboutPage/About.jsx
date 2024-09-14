import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>Welcome to RealEstatePro</h1>
        <p>Your trusted platform for real estate listings and property management.</p>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At LoEstateApp, we are dedicated to helping you find your dream home or investment property.
          With a user-friendly interface, comprehensive listings, and expert guidance, we make your real estate journey smooth and efficient.
        </p>
        <p>
          Whether you're buying, selling, or renting, our team of experienced professionals is here to assist you at every step.
        </p>
        <p>
          Our platform offers real-time updates, advanced search filters, and detailed property descriptions to ensure you make informed decisions.
        </p>
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower individuals and businesses with the tools and information they need to navigate the real estate market with confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
