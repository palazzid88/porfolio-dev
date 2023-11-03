import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MenuHamburguesa = () => {
  const [expanded, setExpanded] = useState(false);

  const name = `const dev = David Palazzi`

  return (
    <Navbar bg="ligth" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home"> {name} </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#sobre-mi" onClick={() => setExpanded(false)}>
              Sobre Mi
            </Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>
              Contacto
            </Nav.Link>
            <Nav.Link href="#mis-proyectos" onClick={() => setExpanded(false)}>
              Mis Proyectos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuHamburguesa;
