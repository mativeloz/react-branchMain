import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'
import './CartWidget.css'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">          
            Tienda de Zapatillas
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Modelos</Nav.Link>
            <Nav.Link href="#pricing">Tienda</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  )
}

export default NavBar