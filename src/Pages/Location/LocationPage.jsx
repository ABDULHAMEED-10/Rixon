/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import MetaData from "../../Components/MataData";
import { ukLocations, usaLocations } from "../../../locationsData";

// Helper function to create URL-friendly slug
const createSlug = (city, region, state, country) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const countrySlug = country.toLowerCase();
  return `${citySlug}-${countrySlug}`;
};

// Helper function to find location by slug
const findLocationBySlug = (slug) => {
  // Try UK locations first
  for (const location of ukLocations) {
    const locationSlug = createSlug(location.city, location.region, null, location.country);
    if (locationSlug === slug) {
      return location;
    }
  }
  
  // Try USA locations
  for (const location of usaLocations) {
    const locationSlug = createSlug(location.city, null, location.state, location.country);
    if (locationSlug === slug) {
      return location;
    }
  }
  
  return null;
};

const LocationPage = () => {
  const { slug } = useParams();
  const location = findLocationBySlug(slug);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const locationName = location.city;
  const locationRegion = location.region || location.state;
  const locationCountry = location.country;
  const fullLocationName = `${locationName}, ${locationRegion}, ${locationCountry}`;

  const isUK = locationCountry === "UK";
  const isUSA = locationCountry === "USA";
  const locationType = isUK ? "UK" : isUSA ? "USA" : "";
  
  const pageTitle = `${isUK || isUSA ? `Software Company & Software Agency in ${locationName}` : `Digital Solutions in ${locationName}`}${locationRegion ? `, ${locationRegion}` : ""} | Rixon`;
  const metaDescription = `Rixon is a leading software company and software agency in ${locationName}, ${locationRegion}, ${locationCountry}. We provide custom software development, web development, app development, AI applications, and e-commerce solutions. Trusted ${locationType} software agency serving ${locationName} businesses.`;

  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title={pageTitle}
        description={metaDescription}
      />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {isUK || isUSA ? (
              <>
                Software Company & Software Agency in{" "}
                <span className="text-green-600">{locationName}</span>
              </>
            ) : (
              <>
                Digital Solutions in{" "}
                <span className="text-green-600">{locationName}</span>
              </>
            )}
          </h1>
          {locationRegion && (
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              {locationRegion}, {locationCountry}
            </p>
          )}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {isUK || isUSA ? (
              <>
                Rixon is a leading software company and software agency in {locationName}, {locationRegion}. 
                We provide custom software development, web development, app development, and digital transformation 
                services tailored for businesses in {locationName}.
              </>
            ) : (
              <>
                Professional web development, app development, and digital transformation services 
                tailored for businesses in {locationName}.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            {isUK || isUSA ? (
              <>Software Development Services in {locationName}</>
            ) : (
              <>Our Services in {locationName}</>
            )}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-gray-400">
                Custom websites and web applications built with modern technologies for businesses in {locationName}.
              </p>
            </div>

            {/* App Development */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">App Development</h3>
              <p className="text-gray-400">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
            </div>

            {/* AI Applications */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Applications</h3>
              <p className="text-gray-400">
                Intelligent solutions powered by artificial intelligence and machine learning.
              </p>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">E-commerce Solutions</h3>
              <p className="text-gray-400">
                Complete online store solutions with payment integration and inventory management.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400">
                Beautiful and intuitive user interfaces designed for optimal user experience.
              </p>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Transformation</h3>
              <p className="text-gray-400">
                End-to-end digital transformation services to modernize your business operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isUK || isUSA ? (
              <>Looking for a Software Company or Software Agency in {locationName}?</>
            ) : (
              <>Ready to Transform Your Digital Presence in {locationName}?</>
            )}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {isUK || isUSA ? (
              <>
                Contact Rixon, a trusted software company and software agency in {locationName}, {locationRegion}. 
                We provide custom software development, web development, and digital solutions to help your business thrive.
              </>
            ) : (
              <>
                Contact Rixon today to discuss how we can help your business thrive in the digital landscape.
              </>
            )}
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;

