import React from 'react';
import PRODUCT_ACTIONS from '../../actions/product';
import { connect } from 'react-redux';
import ProductListComponent from '../../components/ProductList/ProductList';

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return <ProductListComponent products={this.props.products} />
  }
}

const getProducts = () => ({ type: PRODUCT_ACTIONS.GET_PRODUCTS });

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);