import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./Topnav.css";

const Topnav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <Navbar expand="lg" className="p-2 container" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Christine Koniou
        </Navbar.Brand>
        <Nav className="list">
          <Nav.Link className="link" href="about">
            about
          </Nav.Link>
          <Nav.Link className="link" href="projects">
            projects
          </Nav.Link>
          <Nav.Link className="link" href="contact">
            contact
          </Nav.Link>
        </Nav>
        <div onClick={handleNav}>
          {!nav ? (
            <AiOutlineClose size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </div>
        <div className="fixed ">
          <Navbar.Brand href="#home" className="brand">
            Christine Koniou
          </Navbar.Brand>
          <ul>
            <Nav.Link href="about">about</Nav.Link>
            <Nav.Link href="projects">projects</Nav.Link>
            <Nav.Link href="contact">contact</Nav.Link>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Topnav;
