import { Routes, Route } from "react-router-dom";
import { Header } from "./components/core/header/Header";
import "./App.css";
import { Footer } from "./components/core/footer/Footer";
import { Home } from "./components/pages/home/home/Home";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
