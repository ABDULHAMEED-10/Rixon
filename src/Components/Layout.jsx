/* eslint-disable no-unused-vars */
import Footer from "./Layout/Footer/footer";
import Navbar from "./Layout/Header/navbar";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Zap, X, Phone, Calendar, Home, Briefcase, User, Wrench } from "lucide-react";

import CallToAction from "../Pages/Home/HomeComponents/CallToAction/CallToAction.jsx";
import { Outlet } from "react-router";

const Layout = () => {
  const [isContactMenuVisible, setIsContactMenuVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location]);

  const toggleContactMenu = () => {
    setIsContactMenuVisible(!isContactMenuVisible);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Outlet />
      <div className="relative bg-black">
        <CallToAction />
        <Footer />
      </div>

      {/* Mobile Navigation Floating Button - Only visible on mobile */}
      <div className="fixed bottom-5 right-5 z-[9999] md:hidden">
        {/* Navigation & Contact Menu */}
        {isContactMenuVisible && (
          <div className="absolute bottom-16 right-0 mb-2 bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600 rounded-xl shadow-2xl p-4 min-w-[220px] space-y-2 max-h-[80vh] overflow-y-auto">
            {/* Navigation Section */}
            <div className="pb-2 border-b border-green-600/30">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">Navigation</p>
              <Link
                to="/"
                onClick={() => setIsContactMenuVisible(false)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group ${
                  location.pathname === "/" ? "bg-green-600/20" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Home</p>
                  <p className="text-xs text-gray-400">Main page</p>
                </div>
              </Link>

              <Link
                to="/projects"
                onClick={() => setIsContactMenuVisible(false)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group ${
                  location.pathname === "/projects" ? "bg-green-600/20" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Projects</p>
                  <p className="text-xs text-gray-400">Our work</p>
                </div>
              </Link>

              <Link
                to="/about"
                onClick={() => setIsContactMenuVisible(false)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group ${
                  location.pathname === "/about" ? "bg-green-600/20" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">About</p>
                  <p className="text-xs text-gray-400">Learn more</p>
                </div>
              </Link>

              <Link
                to="/tools"
                onClick={() => setIsContactMenuVisible(false)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group ${
                  location.pathname === "/tools" ? "bg-green-600/20" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Tools</p>
                  <p className="text-xs text-gray-400">Free utilities</p>
                </div>
              </Link>
            </div>

            {/* Contact Section */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">Contact</p>
              <a
                href="tel:+923000713825"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                </div>
              </a>

              <a
                href="https://calendly.com/abdulhameed000650/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Book Meeting</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={toggleContactMenu}
          className={`bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-xl shadow-green-600/40 overflow-visible ${
            isContactMenuVisible ? "" : "pulse-animation"
          }`}
          aria-label="Navigation Menu"
          style={{ zIndex: 9999 }}
        >
          <style>
            {`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                }
                50% {
                  transform: scale(1.05);
                  box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
                }
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
                }
              }
              .pulse-animation {
                animation: pulse 2s infinite;
              }
            `}
          </style>
          {isContactMenuVisible ? (
            <X className="w-6 h-6 stroke-[2.5] flex-shrink-0" />
          ) : (
            <Zap className="w-6 h-6 stroke-[2.5] flex-shrink-0 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Layout;
