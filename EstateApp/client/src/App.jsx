import { Layout, RequireAuth } from "./routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import About from "./routes/aboutPage/About";
import Contact from "./routes/contactPage/ContactPage";
import LoginPage from "./routes/loginPage/LoginPage";
import RegisterPage from "./routes/registerPage/RegisterPage";
import NewPostPage from "./routes/newPostPage/newPostPage";
// import ErrorPage from "./routes/errorPage/ErrorPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import AgentsPage from "./routes/agentsPage/AgentsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/agents",
          element: <AgentsPage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
