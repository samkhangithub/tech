import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "../image/techlogo.png";

const TopNav = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/services",
      name: "Services",
    },
    // {
    //   path: "/contact",
    //   name: "Contact",
    // },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
  ];

  return (
    <>
      <Navbar expand="lg" fixed="top" className="main-nav py-2 bg-[#00000]">
        <Container>
          <NavLink to="/" className="logo">
            <img src={logo} />
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav  className="ms-auto">
              {menuData.map((item) => (
                <NavLink  to={item.path} key={item.id} className="nav-item" >
                  <div className="text-white" >{item.name}</div>
                </NavLink>
              ))}
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
