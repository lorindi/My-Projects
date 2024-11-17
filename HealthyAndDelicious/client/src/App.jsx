import "./App.scss";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Header from "./components/header/Header";
import SignIn from "./routes/signIn/SignIn";
import CreateAccount from "./routes/createAccount/CreateAccount";
import AdminPanel from "./routes/adminPanel/AdminPanel";
import NotFound from "./routes/notFound/NotFound";
import CreateRecipe from "./routes/createRecipe/CreateRecipe";
import RecipesList from "./components/recipesList/RecipesList";
import Counter from "./features/counter/Counter";
function App() {
  return (
    <div className="layout">
      <Header />
      <Counter/>
      <main className="main">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/recipes" element={<RecipesList />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
