import React from 'react';

import Intro from './components/intro/Intro';
import Topnav from './components/Navbar/Topnav';
import Description from './components/desciption/Description';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Topnav/>
      <Intro/>
      <Description/>
    </div>
  );
}

export default App;
