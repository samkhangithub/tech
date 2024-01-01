import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "../image/MoscarLogo.png";

const TopNav = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    // Show/hide the navbar based on the scroll direction
    setVisible(isScrollingDown ? false : true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    transition: 'top 0.6s',
    top: visible ? '0' : '-100px', // Adjust the height of the navbar
  };
  return (
    <>
      <Navbar style={navbarStyle} expand="lg" fixed="top" className={" navbar-inverse main-nav py-2 bg - [#00000]"}>
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
