import React from "react";
import { Button } from "react-bootstrap";


import "./ProjectItem.css";

const ProjectItem = ({img, link, title, desc}) => {
  return (
    <div className="pi">
      <div className="pi-left">
        <div className="pi-left-wrapper">
            <img src={img} alt="this is my first app" className="pa-project-img" />
        </div>
      </div>
      <div className="pi-right">
        <div className="pi-right-content">
          <div className="pi-content-title">{title}</div>
          <div className="pi-content-desc">
            <p>{desc}</p>
          </div>
          <div className="pi-content-btn">
            <Button variant="outline-dark" size="sm" target="_blank" href={link}>
              see more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
