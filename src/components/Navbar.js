import React from 'react';

import { Container,  Nav, Navbar, ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './Navbar.scss';
import logo from '../assets/logo.svg';

const Navigation = () => (
  <Navbar expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Cartão</Nav.Link>

          <Nav.Link href="#link">Quem Somos</Nav.Link>

          <Nav.Link href="#link">FAQ</Nav.Link>
        </Nav>

        <ButtonGroup aria-label="Basic example">
          <DropdownButton as={ButtonGroup} title="Acessar minha conta" variant="outline-light" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>

          <Button variant="outline-light">Abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
</Navbar>
);

export default Navigation;