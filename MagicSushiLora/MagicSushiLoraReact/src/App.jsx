import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
