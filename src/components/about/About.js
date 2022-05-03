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
            I like to turn interesting ideas into mockups with a passion for
            minimalistic and user-friendly interfaces. My goal is to learn
            through everyday challenges and develop my skills.
          </h3>
          <div className="cv-btn">
             <Button variant="outline-dark" target="_blank" size="lg" href="https://drive.google.com/file/d/1Z1F7l4rWl924aT9GCgUffB9U6p-Gpusr/view?usp=sharing" >see my resume</Button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
