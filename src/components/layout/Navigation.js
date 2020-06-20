import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='info'
      variant='dark'
      className='sticky-top'
    >
      <Navbar.Brand as={Link} to='/'>
        Kabishan Suvendran
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Nav.Link
            eventKey={1}
            as={Link}
            to='/experiences'
            className='text-center'
          >
            Experiences
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            as={Link}
            to='/projects'
            className='text-center'
          >
            Projects
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            as={Link}
            to='/education'
            className='text-center'
          >
            Education
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
