import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ProjectInfo from "./Pages/ProjectInfo";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/skills",
  //   element: <Skills />,
  // },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectInfo />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
