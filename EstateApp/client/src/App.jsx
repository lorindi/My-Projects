import Layout from "./components/routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/routes/home/HomePage";
import ListPage from "./components/routes/listPage/ListPage";
import SinglePage from "./components/routes/singlePage/SinglePage";
import ProfilePage from "./components/routes/profilePage/ProfilePage";

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
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
