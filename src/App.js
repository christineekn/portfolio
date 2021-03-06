import React from "react";

import Intro from "./components/intro/Intro";
import Topnav from "./components/Navbar/Topnav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Topnav/>
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
