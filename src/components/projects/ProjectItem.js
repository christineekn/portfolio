import React from "react";
import { Button } from "react-bootstrap";
import App from "../../img/app.png";


import "./ProjectItem.css";

const ProjectItem = () => {
  return (
    <div className="pi">
      <div className="pi-left">
        <div className="pi-left-wrapper">
            <img src={App} alt="this is my first app" className="pa-project-img" />
        </div>
      </div>
      <div className="pi-right">
        <div className="pi-right-content">
          <div className="pi-content-title">title</div>
          <div className="pi-content-desc">
            <p>lorem lorem lorem lorem loremlorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem</p>
          </div>
          <div className="pi-content-btn">
            <Button variant="outline-dark" size="sm">
              see more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
