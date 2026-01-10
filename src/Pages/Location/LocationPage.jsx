/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import MetaData from "../../Components/MataData";
import { ukLocations, usaLocations, createSlug } from "../../../locationContent";
import { ChevronDown, ChevronUp } from "lucide-react";

// Helper function to find location by slug
const findLocationBySlug = (slug) => {
  // Search UK locations
  for (const location of ukLocations) {
    const locationSlug = createSlug(location.city, location.region, null, location.country);
    if (locationSlug === slug) {
      return location;
    }
  }
  // Search USA locations
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
  const [openFAQ, setOpenFAQ] = useState(null);

  // Check if location exists
  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const locationName = location.city;
  const locationRegion = location.region;
  const locationCountry = location.country;
  const fullLocationName = `${locationName}, ${locationRegion}, ${locationCountry}`;

  const pageTitle = `Software Company & Software Agency in ${locationName}, ${locationRegion} | Rixon`;
  const metaDescription = `Rixon is a leading software company and software agency in ${locationName}, ${locationRegion}, ${locationCountry}. We provide custom software development, web development, app development, AI applications, and e-commerce solutions. Trusted UK software agency serving ${locationName} businesses.`;

  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title={pageTitle}
        description={metaDescription}
        keywords={`software agency ${locationName}, software company ${locationName}, web development ${locationName}, app development ${locationName}, digital solutions ${locationName}, ${locationName} software agency`}
      />
      
      {/* Hero Section */}
      <section className="py-20 my-10 overflow-hidden bg-black text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-900/20 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-800/10 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-green-600/20 text-green-600 border border-green-600/30 text-sm font-medium mb-4">
              {locationCountry} Location
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Software Company & Software Agency in{" "}
              <span className="text-green-600">{locationName}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              {locationRegion}, {locationCountry}
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {location.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Business Context Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why {locationName} Businesses Choose{" "}
            <span className="text-green-600">Rixon</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {location.businessContext}
          </p>
          <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Our Experience in {locationName}</h3>
            <p className="text-gray-300 leading-relaxed">
              {location.caseReference}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Software Development Services in{" "}
            <span className="text-green-600">{locationName}</span>
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

      {/* FAQs Section */}
      {location.faqs && location.faqs.length > 0 && (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions About Our Services in{" "}
              <span className="text-green-600">{locationName}</span>
            </h2>
            <div className="space-y-4">
              {location.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-green-600/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Looking for a Software Company or Software Agency in{" "}
            <span className="text-green-600">{locationName}</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact Rixon, a trusted software company and software agency in {locationName}, {locationRegion}. 
            We provide custom software development, web development, and digital solutions to help your business thrive.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
