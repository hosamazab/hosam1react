import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component} from "react";
import {NavLink,Link} from "react-router-dom"
import { useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar1() {
  let navClass = (object) => {
    
    return `nav-link ${object.isActive && "text-white bg-primary" }`;
  };
  let count2 = useSelector((state) => state.count.count);

  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{height:'50px'}}>
      <Container>
        <Navbar.Brand href="#home"><i class="bi bi-h-circle-fill" style={{ fontSize: 40 }}></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="home" className={navClass}> HOME </NavLink>
            <NavLink to="about" className={navClass}> ABOUT US </NavLink>
            <NavLink to="cards" className={navClass}> CARDS </NavLink>
          </Nav>
        </Navbar.Collapse>
        {/* <div className='d-flex mx-5 gap-3 fs-3'>
          count of items {count2}
        </div> */}
      </Container>
    </Navbar>
  );
}

export default Navbar1;