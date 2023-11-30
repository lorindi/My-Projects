import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/Contexts";
import Path from "./components/paths";

import { NotFound } from "./components/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/Application/List/List";
import { Create } from "./components/Application/Create/Create";
import { Details } from "./components/Application/Details/Details";
import { Edit } from "./components/Application/Edit/Edit";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <main className="main">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={Path.Home} element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sites" element={<List />} />
            <Route path="/sites/:id/details/*" element={<Details />} />
            <Route path={Path.SiteEdit} element={<Edit />} />
            <Route path="/sites/create" element={<Create />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
