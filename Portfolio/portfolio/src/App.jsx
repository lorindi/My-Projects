import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Heroine } from "./components/heroine/Heroine";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Skills } from "./components/skills/Skills";
import { Internship } from "./components/internship/Internship";
import { ThemeToggle } from "./components/theme/ThemeToggle";
import Certificates from "./components/certificates/Certificates";
import Recommendations from "./components/recommendations/Recommendations";

function App() {
  return (
    <>
      <div>
        <Cursor />
        <ThemeToggle />
        <section id="Homepage">
          <Navbar />
          <Heroine />
        </section>


        <section id="Services">
          <Parallax 
            type="services" 
            title="My Development Journey" 
            subtitle="Where passion meets code" 
          />
        </section>
        <section>
          <Services />
        </section>


        <section id="Internship">
          <Parallax 
            type="internship" 
            title="Internship Projects" 
            subtitle="Real-world experience and growth" 
          />
        </section>
        <section id="Internship">
          <Internship />
        </section>
        <section id="Recommendations">
          <Recommendations />
        </section>


        <section id="Portfolio">
          <Parallax 
            type="portfolio" 
            title="My Portfolio" 
            subtitle="Showcasing my best work" 
          />
        </section>
        <section>
          <Portfolio />
        </section>


        <section id="Skills">
          <Parallax 
            type="skills" 
            title="Skills & Certificates" 
            subtitle="My technical expertise and achievements" 
          />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Certificates">
          <Certificates />
        </section>

        <section id="Contact">
          <Parallax 
            type="contact" 
            title="Contact Me" 
            subtitle="Let's connect and discuss your next project" 
          />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
