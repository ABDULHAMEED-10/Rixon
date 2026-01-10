/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/home";
import AboutUs from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Projects from "./Pages/Projects/projects";
import LocationPage from "./Pages/Location/LocationPage";
import LocationsHub from "./Pages/Locations/LocationsHub";
import Tools from "./Pages/Tools/Tools";
import Layout from "./Components/Layout";

// 404 Page Component
const NotFound = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
        <a
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

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
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/locations",
        element: <LocationsHub />,
      },
      {
        path: "/location/:slug",
        element: <LocationPage />,
      },
      // 404 handler - must be last
      {
        path: "*",
        element: <NotFound />,
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
