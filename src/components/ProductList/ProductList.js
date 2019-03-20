import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductComponent from '../Product/Product';
import propTypes from 'prop-types';

export default class ProductListComponent extends React.Component {
  static propTypes = {
    products: propTypes.array,
    onBtnAddToCartClick: propTypes.func,
    onBtnRemoveFromCartClick: propTypes.func,
    cart: propTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products.map(product => {
      return (
        <Col key={product.id}  xs="12" md="4">
          <ProductComponent onBtnAddToCartClick={this.props.onBtnAddToCartClick} 
                            onBtnRemoveFromCartClick={this.props.onBtnRemoveFromCartClick}
                            id={product.id} 
                            title={product.title} 
                            description={product.description} 
                            image={product.image}
                            quantity={this.props.cart[product.id]}
          />
        </Col>
      );
    });

    return (
      <Container fluid>
        <Row>
          {products}
        </Row>
      </Container>
    );
  }
}
