import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import DesignProjectPage from "./pages/designProjectPage/DesignProjectPage.jsx";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/design/:slug",
        element: <DesignProjectPage />,
      },
    ],
  },
]);

export default router;
