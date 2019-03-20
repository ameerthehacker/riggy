import React from 'react';
import CART_ACTIONS from '../../actions/cart';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import ProductListComponent from '../../components/ProductList/ProductList';

class CartContainer extends React.Component {
  onBtnAddToCartClick(productId) {
    this.props.addToCart(productId);
  }

  onBtnRemoveFromCartClick(productId) {
    this.props.removeFromCart(productId);
  }

  render() {
    if(this.props.products.length > 0) 
    {
      return <ProductListComponent onBtnAddToCartClick={this.onBtnAddToCartClick.bind(this)}
                    onBtnRemoveFromCartClick={this.onBtnRemoveFromCartClick.bind(this)} 
                    products={this.props.products}
                    cart={this.props.cart} 
              />
    }
    else {
      return <Jumbotron className="text-center">
                <h1>Cart is empty</h1>
                <p>
                  Good food is always being cooked
                </p>
             </Jumbotron>;
    }
  }
}

const addToCart = (productId) => ({ type: CART_ACTIONS.ADD_TO_CART, payload: productId });
const removeFromCart = (productId) => ({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: productId })
const getProductsInCart = (state) => {
  const productIds = Object.keys(state.cart);

  return productIds.map(
                   productId => state.
                   products.
                   find(product => product.id == productId));
}

const mapStateToProps = (state) => {
  return {
    products: getProductsInCart(state),
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId) => dispatch(addToCart(productId)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);