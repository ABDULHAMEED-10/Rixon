/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/home";
import AboutUs from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Projects from "./Pages/Projects/projects";
import Layout from "./Components/Layout";
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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="bg-black min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
