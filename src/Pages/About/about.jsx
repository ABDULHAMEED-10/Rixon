import AboutSection from "./AboutComponents/AboutSection";
import MetaData from "../../Components/MataData";

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title="About Us"
        description="Rixon is a leading software company and software agency in the UK and USA. We're a team of digital innovators combining creativity, technical expertise, and strategic thinking to deliver exceptional custom software development and digital solutions that drive business growth."
        keywords="software company, software agency, software development company, custom software development, software agency UK, software company USA, about rixon, software team"
      />
      <AboutSection />
    </div>
  );
};

export default About;
