/* eslint-disable no-unused-vars */
import React from "react";
import MetaData from "../../Components/MataData";
import HeroSection from "./HomeComponents/HeroSec/HeroSection";
import Brand from "./HomeComponents/TrusedBy/Brand";
import Services from "./HomeComponents/Service/Services";
import TimeLine from "./HomeComponents/WorkFlow/TimeLine";
import SpecialOffer from "./HomeComponents/Discount/SpecialOffer";
import Stats from "./HomeComponents/Satatistics/Stats";
import Caurosel from "./HomeComponents/Testimonial/Caurosel";
import FAQ from "./HomeComponents/FAQs/FAQ";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title="Home" 
        description="For over six years, Rixon has been delivering innovative digital solutions with creativity, precision, and excellence. We specialize in AI-driven applications, sophisticated e-commerce platforms, and custom web and mobile solutions."
      />
      <HeroSection />
      <Brand />
      <Services />
      <TimeLine />
      <Stats />
      <SpecialOffer />
      <Caurosel />
      <FAQ />
    </div>
  );
};

export default Home;
