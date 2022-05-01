import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsDribbble, BsBehance, BsLinkedin, BsGithub } from "react-icons/bs";

import "./Topnav.css";

const Topnav = () => {
  return (
    // <Navbar bg="dark" variant={"dark"} expand="lg" fixed="top" className="t-nav">
    //   <Container>
    //     <Navbar.Brand href="#home" className="brand">Christine Koniou.</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" >
    //       <Nav className="d-flex float-md-end">
    //         <Nav.Link
    //           className="p-2"
    //           target="_blank"
    //           href="https://www.behance.net/christinekon"
    //         >
    //           <BsBehance size={20} />
    //         </Nav.Link>
    //         <Nav.Link
    //           className="p-2"
    //           target="_blank"
    //           href="https://dribbble.com/christKon"
    //         >
    //           <BsDribbble size={20} />
    //         </Nav.Link>
    //         <Nav.Link
    //           className="p-2"
    //           target="_blank"
    //           href="https://github.com/christineekn"
    //         >
    //           <BsGithub size={20} />
    //         </Nav.Link>
    //         <Nav.Link
    //           className="p-2"
    //           target="_blank"
    //           href="https://www.linkedin.com/in/christine-koniou-2a0044100/"
    //         >
    //           <BsLinkedin size={20} />
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <div className="t">
      <Navbar expand="lg" className="p-2 container" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            Christine Koniou.
          </Navbar.Brand>
          <Nav className="list d-xs-none">
            <Nav.Link className="p-2" target="_blank" href="https://www.behance.net/christinekon">
              <BsBehance size={20}/>
            </Nav.Link>
            <Nav.Link className="p-2" target="_blank" href="https://dribbble.com/christKon">
            <BsDribbble size={20}/>
            </Nav.Link>
            <Nav.Link className="p-2" target="_blank" href="https://github.com/christineekn">
              <BsGithub size={20}/>
            </Nav.Link>
            <Nav.Link className="p-2" target="_blank" href="https://www.linkedin.com/in/christine-koniou-2a0044100/">
              <BsLinkedin size={20}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topnav;
