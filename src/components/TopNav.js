import React from "react";
import {  NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css';
import logo from "../image/logo.png";


const TopNav = () => {

    const menuData = [
        {
            path:'/',
            name: "Home"
        },
        {
            path:'/about',
            name: "About"
            
        },
        {
            path:'/services',
            name: 'Services'
        },
        {
            path:'/contact',
            name: "Contact"
        },
       
    ]


    return (
        <>
          <Navbar bg="primary" expand="lg" >
      <Container>
        <NavLink to="/" className="logo"><img src={logo} /></NavLink>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
           {
            menuData.map((item)=>( 
                <NavLink to={item.path} key={item.id} className="nav-item">
                    <div className="text-white">{item.name}</div>
                </NavLink>
            ))
           }
          </Nav>
          <Nav className="ms-auto ">
            <Link to="/contact" className="btn-nav">CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
};

export default TopNav;


