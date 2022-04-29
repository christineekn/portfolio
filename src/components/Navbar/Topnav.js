import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsDribbble, BsBehance, BsLinkedin } from "react-icons/bs";

import "./Topnav.css";

const Topnav = () => {
  return (
      <div>
        <Navbar expand="lg" className="p-2 container" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="brand">
              Christine Koniou
            </Navbar.Brand>
            <Nav className="list">
              <Nav.Link href="https://dribbble.com/christKon">
              <BsDribbble size={20}/>
              </Nav.Link>
              <Nav.Link href="https://www.behance.net/christinekon">
                <BsBehance size={20}/>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/christine-koniou-2a0044100/">
                <BsLinkedin size={20}/>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
};

export default Topnav;
