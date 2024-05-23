import styles from "./app.module.scss";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar />
        </section>
        <section id="Services">Parallax</section>
        <section>Services</section>
        <section id="Portfolio">Parallax</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
