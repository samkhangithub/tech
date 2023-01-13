import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css';


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
            path:'/contact',
            name: "Contact"
        },
    ]


    return (
        <>
          <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Brains PK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {
            menuData.map((item)=>( 
                <NavLink to={item.path} key={item.id}>
                    <div className="list_item text-white">{item.name}</div>
                </NavLink>
            ))
           }
          </Nav>
          <Nav className="ms-auto">
            <button className="btn btn-success">Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
};

export default TopNav;