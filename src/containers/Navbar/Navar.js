import React from 'react';
import NavbarComponent from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class NavbarContainer extends React.Component {
  static propTypes = {
    cartQuantity: propTypes.number
  };

  render() {
    return <NavbarComponent cartQuantity={this.props.cartQuantity} />
  }
}

const getCartQuantity = (state) => {
  let total = 0;

  Object.keys(state.cart).forEach((productId) => {
    total += state.cart[productId];
  });

  return total;
}

const mapStateToProps = (state) => {
  return {
    cartQuantity: getCartQuantity(state)
  }
}

export default connect(mapStateToProps)(NavbarContainer);



