import React from "react";
import { Button } from "react-bootstrap";

import "./Description.css";

const Description = () => {
  return (
    <div className="i-desc">
      <div className="i-desc-left">
        <div className="i-desc-left-wrapper">
          <h1 className="i-bio-title">BIO</h1>
          <h3 className="i-bio-short">
            I like to turn interesting ideas into mochups with a passion for
            minimalistic and user-friendly interfaces. My goal is to learn
            through everyday challenges and develop my skills.
          </h3>

          <Button variant="outline-dark" size="lg" className="about-btn">
            see my journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Description;
