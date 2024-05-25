import styles from "./app.module.scss";
import { Heroine } from "./components/heroine/Heroine";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
function App() {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar />
          <Heroine />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>Services</section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
