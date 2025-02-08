import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Error from "../Pages/Error.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ProjectDetails from "../Pages/ProjectDetails.jsx";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});
export default router;
