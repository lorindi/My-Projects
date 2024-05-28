import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Heroine } from "./components/heroine/Heroine";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
function App() {
  return (
    <>
      <div>
        <Cursor/>
        <section id="Homepage">
          <Navbar />
          <Heroine />
        </section>
        {/* <section id="Services">
          <Parallax type="services" />
        </section> */}
        {/* <section>
          <Services />
        </section> */}
        {/* <section id="Portfolio">
          <Parallax type="portfolio" />
        </section> */}
        {/* <section>
          <Portfolio />
        </section> */}
        {/* <section id="Contact">
          <Contact />
        </section> */}
      </div>
    </>
  );
}

export default App;
