import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='info'
      variant='dark'
      className='sticky-top'
    >
      <Navbar.Brand href='/'>Kabishan Suvendran</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Nav.Link href='/experiences'>Experiences</Nav.Link>
          <Nav.Link eventKey={2} href='/projects'>
            Projects
          </Nav.Link>
          <Nav.Link eventKey={3} href='/education'>
            Education
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
