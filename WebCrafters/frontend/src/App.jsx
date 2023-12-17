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
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/Application/List/List";
import { Create } from "./components/Application/Create/Create";
// import { CreateItSpecialist } from "./components/AboutUs/CreateItSpecialist/CreateItSpecialist";
import { EditItSpecialist } from "./components/AboutUs/EditItSpecialist/EditItSpecialist";

import { Details } from "./components/Application/Details/Details";
import { Edit } from "./components/Application/Edit/Edit";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AuthGuard from "./components/Guards/AuthGuard";
import { UnauthorizedGuard } from "./components/Guards/UnauthorizedGuard";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="box">
          <Header />
          <main className="main">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path={Path.Home} element={<Home />} />

              <Route element={<UnauthorizedGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/sites" element={<List />} />
              <Route path={Path.SiteDetails} element={<Details />} />

              <Route element={<AuthGuard />}>
                {/* <Route path={Path.CreateItSpecialist} element={<CreateItSpecialist />} /> */}
                <Route path={Path.EditItSpecialist} element={<EditItSpecialist />} />

                <Route path="/sites/create" element={<Create />} />
                <Route path={Path.SiteEdit} element={<Edit />} />
                <Route path={Path.Logout} element={<Logout />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
