import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; 
import { HashLink } from 'react-router-hash-link';
import GitHub from "../assets/GitHub.svg"
import LinkedIn from "../assets/LinkedIn.png"
import Logo from "../assets/logo.png"
import {
  BrowserRouter as Router
} from "react-router-dom";

import "../styles/Header.css"

  const Header = () => {

  const [activeLink, setActiveLink] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}  >
        <Container >
          <Navbar.Brand  href="#inicio" >  
            <span className="navbar-logo">Argenis Centeno</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
              <Nav.Link href="#habilidades" className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
              <Nav.Link href="#proyectos" className={activeLink === 'proyectos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('proyectos')}>Proyectos</Nav.Link>
              <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>Contacto</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={GitHub}   alt="" /></a>
                <a href="#"><img src={LinkedIn}  alt="" /></a> 
              </div>
             
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}


export default Header