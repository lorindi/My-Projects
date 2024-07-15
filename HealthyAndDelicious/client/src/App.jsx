import "./App.scss";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Header from "./components/header/Header";
import SignIn from "./routes/signIn/SignIn";
import CreateAccount from "./routes/createAccount/CreateAccount";
import Search from './components/search/Search'
import Title from "./components/titles/Titles";
import Description from "./components/description/Description";
import Loader from "./components/loader/Loader";
function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Loader/>
      <Description>
        Това е примерно описание, което можеш да използваш навсякъде в приложението си.
      </Description>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
