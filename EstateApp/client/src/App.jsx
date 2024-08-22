import { Layout, RequireAuth } from "./components/routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/routes/homePage/HomePage";
import ListPage from "./components/routes/listPage/ListPage";
import SinglePage from "./components/routes/singlePage/SinglePage";
import ProfilePage from "./components/routes/profilePage/ProfilePage";
import ProfileUpdatePage from "./components/routes/profileUpdatePage/ProfileUpdatePage";

import About from "./components/routes/about/About";
import Contact from "./components/routes/contact/Contact";
import Login from "./components/routes/login/Login";
import Register from "./components/routes/register/Register";
import NewPostPage from "./components/routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
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
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
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
