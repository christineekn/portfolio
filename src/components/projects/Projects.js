import React from "react";
import ProjectItem from "./ProjectItem";

import projectUI from "../../data";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-wrapper">
        <h1 className="p-projects-title">PROJECTS</h1>
        <div className="p-projects-list">
          <div className="p-card">
            <h1 className="p-card-title">UI/UX Design</h1>
            {projectUI.map((item) => (
              <ProjectItem key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} />
            ))}
          </div>
          <div className="p-card">
            <h1 className="p-card-title">WEB APPLICATIONS</h1>
            <h1 className="c-soon">Coming Soon</h1>
          </div>
          <div className="p-card">
            <h1 className="p-card-title">ILLUSTRATIONS</h1>
            <h1 className="c-soon">Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
