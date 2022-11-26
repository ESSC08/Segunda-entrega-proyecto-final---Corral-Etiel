import "./NavBar.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to={ "/" }>Menu</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to={"/Productos"}>Productos</Link>
                <Link to={"/Contacto"}>Contacto</Link>
              </Nav>
              <Nav>
              <Nav.Link href="#deets">Mis compras</Nav.Link>
                <Link to={"/cart"}>               
                  <CartWidget/>                 
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar