import "./../Home.css";
import { reviewsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import CaurosalCard from "./CaurosalCard";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Caurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const totalItems = reviewsData.length;

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1); // 1 item for mobile
      } else {
        setVisibleItems(2); // 2 items for larger screens
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalItems - visibleItems; // Loop to end
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = totalItems - visibleItems;
      if (prevIndex >= maxIndex) {
        return 0; // Loop to beginning
      }
      return prevIndex + 1;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
  });

  const getTransformValue = () => {
    // Calculate exact transform based on visible items
    if (visibleItems === 1) {
      // On mobile: move exactly 100% per card
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      // On desktop: move 50% per card (since 2 cards visible)
      return `translateX(-${currentIndex * 50}%)`;
    }
  };

  return (
    <div {...handlers} className="py-10 bg-black" id="reviews">
      {/* Title Section */}
      <div className="w-full mx-auto max-w-8xl px-4 lg:px-8 text-center mb-8">
        <TitleAndPara prop={titleParaInfo[4]} />
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative overflow-hidden">
          {/* Left Navigation Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 backdrop-blur-sm border border-green-600 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg hover:bg-green-600 hover:border-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 backdrop-blur-sm border border-green-600 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg hover:bg-green-600 hover:border-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Carousel Content */}
          <div
            className="flex transition-transform duration-700 ease-in-out py-4 sm:py-6"
            style={{ transform: getTransformValue() }}
          >
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  visibleItems === 1 
                    ? "w-full min-w-full px-3" 
                    : "w-full sm:w-1/2 sm:min-w-[50%] px-3 sm:px-4"
                }`}
              >
                <CaurosalCard prop={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 sm:mt-8 gap-2">
        {Array.from({ length: Math.max(1, totalItems - visibleItems + 1) }).map(
          (_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 w-8 sm:w-10 shadow-md"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          }
        )}
      </div>

      {/* Testimonial count */}
      <div className="text-center mt-10 text-sm text-gray-400">
        <p>Based on {totalItems} verified customer reviews</p>
      </div>
    </div>
  );
};

export default Caurosel;
