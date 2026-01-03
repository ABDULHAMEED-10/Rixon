import React from "react";
import { Rocket, Sparkles } from "lucide-react";

export const CallToAction = () => {
  return (
    <div className="absolute w-[85%] -top-24 left-1/2 transform -translate-x-1/2 border-2 border-green-600 bg-green-700 rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-10 lg:px-36 py-8 sm:py-10 lg:py-14 gap-6 lg:gap-0 hover:scale-105 transition duration-300">
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 w-full lg:w-auto justify-center lg:justify-start">
        <div className="hidden lg:flex items-center justify-center rounded-full w-16 h-16 bg-white/10 border-2 border-white/20 flex-shrink-0">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-extrabold mb-2">
            Level Up With Rixon Agency
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200">
            Elevating businesses, executing ideas, delivering swift experiences.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
        <button className="bg-black border-2 border-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
          <a href="https://calendly.com/abdulhameed000650/30min">
            Get Started Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
