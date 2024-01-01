import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "../image/MoscarLogo.png";

const TopNav = () => {
  


  const [isFixed, setIsFixed] = useState(false);


  const handleScroll = () => {
    // Use window.scrollY instead of window.screenY
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Add and remove event listener when component mounts and unmounts
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    {/* <div className={` ${isFixed ? "fixed-navbar" : ""}`}>

      <Navbar expand="lg" fixed="top"  className={`navbar-inverse main-nav py-2 border border-red-800 w-full`}>
       
          <NavLink  to="/" className="logo">
            <img  src={logo} />
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav  className="ms-auto">
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
            </Nav>
            <Nav className="ms-auto">
              <NavLink  to="/contact" className="btn-nav">
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      </div> */}

    </>
  );
};

export default TopNav;
