import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/notes">CreateNote</Nav.Link>
            <Nav.Link href="/tasks">CreateTask</Nav.Link>
            <Nav.Link href="/taskslist">TaskList</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
