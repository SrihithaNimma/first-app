import React from 'react'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../images/atlastlogo.jpg';
import { Link } from 'react-router-dom';
function NaVbar(props){
  let scrollToFooter = () => {
    props.footerref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='wbar d-flex '>
        <div className='logo d-flex ms-3'>
        <div className='me-3'>
            <img src={img1} height="50px" width="50px" className='logo'/>
            </div>
            <div className='pt-1'>
<Navbar.Brand href="#home" className='title'>A&nbsp;T&nbsp;L&nbsp;A&nbsp;S&nbsp;T</Navbar.Brand>
        </div>
        </div>
        <div className='bar me-3'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <a href="/" className="links nav-link">Home</a>
          <a href="/productline" className="links nav-link">Product Line</a>
          <Link onClick={scrollToFooter} className=" links nav-link">Contact Us</Link>
          <a href="/aboutus" className="links nav-link">About Us</a>
          <a href="/acheivements" className="links nav-link">Achievements</a>
          <a href="/login" className="links nav-link">Login</a>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </div>

  );
}

export default NaVbar