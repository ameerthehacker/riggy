import React from 'react';
import PRODUCT_ACTIONS from '../../actions/product';
import CART_ACTIONS from '../../actions/cart';
import { connect } from 'react-redux';
import ProductListComponent from '../../components/ProductList/ProductList';

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  onBtnAddToCartClick(productId) {
    this.props.addToCart(productId);
  }

  onBtnRemoveFromCartClick(productId) {
    this.props.removeFromCart(productId);
  }

  render() {
    return <ProductListComponent onBtnAddToCartClick={this.onBtnAddToCartClick.bind(this)}
                                 onBtnRemoveFromCartClick={this.onBtnRemoveFromCartClick.bind(this)} 
                                 products={this.props.products}
                                 cart={this.props.cart} 
           />
  }
}

const getProducts = () => ({ type: PRODUCT_ACTIONS.GET_PRODUCTS });
const addToCart = (productId) => ({ type: CART_ACTIONS.ADD_TO_CART, payload: productId });
const removeFromCart = (productId) => ({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: productId })

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: (productId) => dispatch(addToCart(productId)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);