// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsSection from "./ProjectsComponents/ProjectsSection";
import MetaData from "../../Components/MataData";

export const projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title="Projects"
        description="Explore our portfolio of successful projects delivered for clients across various industries. Featured projects showcasing our expertise in web development, app development, and digital solutions."
      />
      <ProjectsSection />
    </div>
  );
};

export default projects;
