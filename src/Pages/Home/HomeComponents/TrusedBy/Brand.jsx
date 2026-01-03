import { useState } from "react";
import PropTypes from "prop-types";
import { brandsData } from "../../../../demoData";
export default function Brand() {
  return (
    <section className="relative py-8 md:py-14 overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-10 top-10 w-72 h-72 bg-green-900/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-green-800/10 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4">
            <span className="relative inline-block">
              Trusted by
              <span className="text-green-600 mx-2">30+</span>
              Active Clients
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 3C50 0.5 150 0.5 200 3"
                  stroke="#10B981"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Industry leaders who trust our solutions and services worldwide
          </p>
        </div>

        {/* Single row marquee effect */}
        <LogoMarquee brands={brandsData} />
      </div>
    </section>
  );
}

const LogoMarquee = ({ brands }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => new Set([...prev, index]));
  };

  // Only render brands that have valid image sources
  const validBrands = brands.filter((brand) => brand.imageSrc);

  return (
    <div className="relative overflow-hidden py-6 md:py-8 my-6 md:my-8">
      {/* Gradient fade edges for professional look */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        }
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        }
      `}</style>

      <div className="animate-marquee flex whitespace-nowrap will-change-transform">
        {/* First set of logos */}
        {validBrands.map((brand, i) => {
          // Hide box if image failed to load
          if (failedImages.has(i)) return null;
          
          return (
            <a
              key={i}
              href={brand.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 bg-gray-900 rounded-xl border border-green-600 shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-500 flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-[calc(50%-12px)] sm:w-40 md:w-48 lg:w-56 mx-1.5 sm:mx-3 md:mx-4 lg:mx-6 overflow-hidden cursor-pointer ${
                loadedImages.has(i) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 w-full h-full flex items-center justify-center">
                <img
                  src={brand.imageSrc}
                  alt={brand.altText || "Brand Logo"}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105 max-w-[85%]"
                  loading="lazy"
                  onLoad={() => handleImageLoad(i)}
                  onError={() => handleImageError(i)}
                />
              </div>
            </a>
          );
        })}

        {/* Duplicate set for seamless loop */}
        {validBrands.map((brand, i) => {
          // Hide box if image failed to load
          if (failedImages.has(i)) return null;
          
          return (
            <a
              key={`dup-${i}`}
              href={brand.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 bg-gray-900 rounded-xl border border-green-600 shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-500 flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-[calc(50%-12px)] sm:w-40 md:w-48 lg:w-56 mx-1.5 sm:mx-3 md:mx-4 lg:mx-6 overflow-hidden cursor-pointer ${
                loadedImages.has(i) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 w-full h-full flex items-center justify-center">
                <img
                  src={brand.imageSrc}
                  alt={brand.altText || "Brand Logo"}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105 max-w-[85%]"
                  loading="lazy"
                  onLoad={() => handleImageLoad(i)}
                  onError={() => handleImageError(i)}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

LogoMarquee.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string,
      website: PropTypes.string,
    })
  ).isRequired,
};
