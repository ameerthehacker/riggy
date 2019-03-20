import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

export default class NavbarComponent extends React.Component {
  static propTypes = {
    cartQuantity: propTypes.number
  };

  constructor(props) {
    super(props);
  }

  render() {
    const cartBadge = this.props.cartQuantity > 0? 
                    <Badge variant="light">{this.props.cartQuantity}</Badge>: "";

    return (
      <Navbar className="fixed-top" bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Riggy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span className="mr-auto"></span>
          <Nav>
            <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
            <NavLink exact activeClassName="active" to="/cart" className="nav-link">Cart {cartBadge}</NavLink>
            <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}