import React from "react";
import Me from "../../img/me2.png";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Christine Koniou</h1>
          <h2 className="i-intro-2">and I am a</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Coffee lover</div>
              <div className="i-title-item">Daydreamer</div>
            </div>
          </div>
          <div className="i-scroll">
            <svg
              width="17"
              height="83"
              viewBox="0 0 17 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8.5"
                y1="0.5"
                x2="8.5"
                y2="81.5"
                stroke="black"
                stroke-linecap="round"
              />
              <path
                d="M16.5 74.5L8.5 82.5L0.5 74.5"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
