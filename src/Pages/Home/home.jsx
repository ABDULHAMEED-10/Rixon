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
        description="Rixon is a leading software company and software agency in the UK and USA, delivering innovative digital solutions for over six years. We specialize in custom software development, AI-driven applications, web development, mobile apps, and e-commerce platforms. Trusted software agency serving clients globally."
        keywords="software company, software agency, software development company, custom software development, software agency UK, software company USA, web development, app development, AI applications, e-commerce, digital solutions, software solutions"
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
