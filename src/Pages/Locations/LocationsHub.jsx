/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaData from "../../Components/MataData";
import { ukLocations, usaLocations, createSlug } from "../../../locationContent";

const LocationsHub = () => {
  const [expandedRegions, setExpandedRegions] = useState({});
  const [expandedStates, setExpandedStates] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("all"); // "all", "uk", "usa"
  const [selectedRegion, setSelectedRegion] = useState("all"); // For UK regions
  const [selectedState, setSelectedState] = useState("all"); // For USA states
  const INITIAL_DISPLAY_COUNT = 6; // Show first 6 locations by default

  // Group UK locations by region
  const ukLocationsByRegion = ukLocations.reduce((acc, location) => {
    const region = location.region || "Other";
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(location);
    return acc;
  }, {});

  // Group USA locations by state
  const usaLocationsByState = usaLocations.reduce((acc, location) => {
    const state = location.state || "Other";
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(location);
    return acc;
  }, {});

  // Sort regions and states
  const sortedUKRegions = Object.keys(ukLocationsByRegion).sort();
  const sortedUSAStates = Object.keys(usaLocationsByState).sort();

  // Get filtered UK regions based on selection
  const getFilteredUKRegions = () => {
    if (selectedCountry === "usa") return [];
    if (selectedRegion === "all") return sortedUKRegions;
    return sortedUKRegions.filter(region => region === selectedRegion);
  };

  // Get filtered USA states based on selection
  const getFilteredUSAStates = () => {
    if (selectedCountry === "uk") return [];
    if (selectedState === "all") return sortedUSAStates;
    return sortedUSAStates.filter(state => state === selectedState);
  };

  // Reset region/state filters when country changes
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedRegion("all");
    setSelectedState("all");
  };

  const toggleRegion = (region) => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region]
    }));
  };

  const toggleState = (state) => {
    setExpandedStates(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title="Our Locations - Software Agency in UK & USA Cities | Rixon"
        description="Rixon provides software development, web development, and digital solutions across major UK and USA cities. Find our services in London, Manchester, New York, Los Angeles, Chicago, and more locations."
        keywords="software agency UK, software company UK, software agency USA, web development UK, web development USA, app development UK, app development USA, digital solutions UK, digital solutions USA"
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
              Our Locations
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              View Our <span className="text-green-600">Locations</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Rixon provides software development, web development, and digital transformation services across major UK and USA cities. 
              Find our services in your city and discover how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Country Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => handleCountryChange("all")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCountry === "all"
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 border border-green-600/30"
              }`}
            >
              All Locations
            </button>
            <button
              onClick={() => handleCountryChange("uk")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCountry === "uk"
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 border border-green-600/30"
              }`}
            >
              UK
            </button>
            <button
              onClick={() => handleCountryChange("usa")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCountry === "usa"
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 border border-green-600/30"
              }`}
            >
              USA
            </button>
          </div>

          {/* UK Region Filter */}
          {(selectedCountry === "all" || selectedCountry === "uk") && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedRegion("all")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  selectedRegion === "all"
                    ? "bg-green-600/30 text-green-600 border border-green-600"
                    : "bg-gray-900/50 text-gray-400 hover:text-green-600 hover:bg-gray-800/50 border border-gray-700"
                }`}
              >
                All UK Regions
              </button>
              {sortedUKRegions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    selectedRegion === region
                      ? "bg-green-600/30 text-green-600 border border-green-600"
                      : "bg-gray-900/50 text-gray-400 hover:text-green-600 hover:bg-gray-800/50 border border-gray-700"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          )}

          {/* USA State Filter */}
          {(selectedCountry === "all" || selectedCountry === "usa") && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedState("all")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  selectedState === "all"
                    ? "bg-green-600/30 text-green-600 border border-green-600"
                    : "bg-gray-900/50 text-gray-400 hover:text-green-600 hover:bg-gray-800/50 border border-gray-700"
                }`}
              >
                All USA States
              </button>
              {sortedUSAStates.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    selectedState === state
                      ? "bg-green-600/30 text-green-600 border border-green-600"
                      : "bg-gray-900/50 text-gray-400 hover:text-green-600 hover:bg-gray-800/50 border border-gray-700"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* UK Locations */}
      {(selectedCountry === "all" || selectedCountry === "uk") && (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
              Our <span className="text-green-600">UK Locations</span>
            </h2>
            {getFilteredUKRegions().map((region) => {
            const locations = ukLocationsByRegion[region].sort((a, b) => a.city.localeCompare(b.city));
            const isExpanded = expandedRegions[region];
            const displayLocations = isExpanded ? locations : locations.slice(0, INITIAL_DISPLAY_COUNT);
            const hasMore = locations.length > INITIAL_DISPLAY_COUNT;

            return (
              <div key={region} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-4 border-b border-green-600/30">
                  {region}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayLocations.map((location, index) => {
                    const slug = createSlug(location.city, location.region, null, location.country);
                    const uniqueKey = `${slug}-${location.region}-${index}`;
                    return (
                      <Link
                        key={uniqueKey}
                        to={`/location/${slug}`}
                        className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 group"
                      >
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-600 transition-colors">
                          {location.city}
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">{location.region}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {location.intro.substring(0, 100)}...
                        </p>
                        <span className="inline-flex items-center text-green-600 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                          Learn more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                {hasMore && (
                  <button
                    onClick={() => toggleRegion(region)}
                    className="mt-6 px-6 py-2 bg-green-600/20 border border-green-600/50 rounded-lg text-green-600 font-semibold hover:bg-green-600/30 hover:border-green-600 transition-all duration-300"
                  >
                    {isExpanded ? "View Less" : `View More (${locations.length - INITIAL_DISPLAY_COUNT} more)`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* USA Locations */}
      {(selectedCountry === "all" || selectedCountry === "usa") && (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
              Our <span className="text-green-600">USA Locations</span>
            </h2>
            {getFilteredUSAStates().map((state) => {
            const locations = usaLocationsByState[state].sort((a, b) => a.city.localeCompare(b.city));
            const isExpanded = expandedStates[state];
            const displayLocations = isExpanded ? locations : locations.slice(0, INITIAL_DISPLAY_COUNT);
            const hasMore = locations.length > INITIAL_DISPLAY_COUNT;

            return (
              <div key={state} className="mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 pb-4 border-b border-green-600/30">
                  {state}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayLocations.map((location, index) => {
                    const slug = createSlug(location.city, null, location.state, location.country);
                    const uniqueKey = `${slug}-${location.state}-${index}`;
                    return (
                      <Link
                        key={uniqueKey}
                        to={`/location/${slug}`}
                        className="bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-6 hover:border-green-600 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 group"
                      >
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-600 transition-colors">
                          {location.city}
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">{location.state}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {location.intro.substring(0, 100)}...
                        </p>
                        <span className="inline-flex items-center text-green-600 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                          Learn more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                {hasMore && (
                  <button
                    onClick={() => toggleState(state)}
                    className="mt-6 px-6 py-2 bg-green-600/20 border border-green-600/50 rounded-lg text-green-600 font-semibold hover:bg-green-600/30 hover:border-green-600 transition-all duration-300"
                  >
                    {isExpanded ? "View Less" : `View More (${locations.length - INITIAL_DISPLAY_COUNT} more)`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
};

export default LocationsHub;
