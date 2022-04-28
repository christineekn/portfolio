import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "./Topnav.css";

const Topnav = () => {
  return (

    <Navbar expand="lg" className="p-3 container" fixed="top">
        <Container>
            <Navbar.Brand href="#home" className="brand">Christine Koniou</Navbar.Brand>
            <Nav className="list">
                <Nav.Link className="link" href="about">about</Nav.Link>
                <Nav.Link className="link" href="projects">projects</Nav.Link>
                <Nav.Link className="link" href="contact">contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    
  );
};

export default Topnav;
