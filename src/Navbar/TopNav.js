import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "../image/MoscarLogo.png";

const TopNav = () => {
  


  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.screenY >= 300) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", setFixed)
  return (
    <>
      <Navbar expand="lg" fixed="top" className={" navbar-inverse main-nav py-2 bg - [#00000]"}>
        <Container>
          <NavLink  to="/" className="logo">
            <img  src={logo} />
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav  className="ms-auto">
              {/* {menuData.map((item) => ( */}
                <NavLink  to='/'  className="nav-item" >
                  <div className="text-white" >Home</div>
              </NavLink>
              
              <NavLink to='/about' className="nav-item" >
                <div className="text-white" >About</div>
              </NavLink>

              <NavLink to='/services' className="nav-item" >
                <div className="text-white" >Services </div>
              </NavLink>

              <NavLink to='/portfolio' className="nav-item" >
                <div className="text-white" >Portfolio</div>
              </NavLink>
              {/* ))} */}
            </Nav>
            <Nav className="ms-auto">
              <NavLink  to="/contact" className="btn-nav">
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
