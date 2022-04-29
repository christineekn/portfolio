import React from "react";

import Intro from "./components/intro/Intro";
import Topnav from "./components/Navbar/Topnav";
import About from "./components/about/About";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Topnav/>
      <Intro />
      <About />
    </div>
  );
}

export default App;
