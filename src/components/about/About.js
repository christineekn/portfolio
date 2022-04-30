import React from "react";
import { Button } from "react-bootstrap";

import "./About.css";

const About = () => {
  return (
    <div className="a-desc">
      <div className="a-desc-left">
        <div className="a-desc-left-wrapper">
          <h1 className="a-bio-title">ABOUT ME</h1>
          <h3 className="a-bio-short">
            I like to turn interesting ideas into mochups with a passion for
            minimalistic and user-friendly interfaces. My goal is to learn
            through everyday challenges and develop my skills.
          </h3>
          <div className="cv-btn">
            <Button variant="outline-dark">download CV</Button>
          </div>
        </div>
      </div>
      <div className="a-desc-right"></div>
    </div>
  );
};

export default About;
