import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="fixed-top" bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Riggy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <span className="mr-auto"></span>
            <Nav>
              <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
              <NavLink exact activeClassName="active" to="/cart" className="nav-link">Cart</NavLink>
              <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}