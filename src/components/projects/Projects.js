import React from "react";
import ProjectItem from "./ProjectItem";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-wrapper">
        <h1 className="p-projects-title">PROJECTS</h1>
        <div className="p-projects-list">
          <div className="p-card">
            <h1 className="p-card-title">UI/UX Design</h1>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            
          </div>
          <div className="p-card">
            <h1 className="p-card-title">WEB APPLICATIONS</h1>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
          </div>
          <div className="p-card">
            <h1 className="p-card-title">ILLUSTRATIONS</h1>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
