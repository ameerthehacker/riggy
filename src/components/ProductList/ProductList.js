import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductComponent from '../Product/Product';
import propTypes from 'prop-types';

export default class ProductListComponent extends React.Component {
  static propTypes = {
    products: propTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products.map(product => {
      return (
        <Col key={product.id}  xs="12" md="4">
          <ProductComponent title={product.title} 
                            description={product.description} 
                            image={product.image}
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
