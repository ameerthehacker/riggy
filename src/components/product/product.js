import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import propTypes from 'prop-types';
import CounterComponent from '../Counter/Counter';

export default class ProductComponent extends React.Component {
  static propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    description: propTypes.string,
    image: propTypes.string,
    onBtnIncrementClick: propTypes.func,
    onBtnDecrementClick: propTypes.func,
    quantity: propTypes.number
  };

  constructor(props) {
    super(props);
  }

  onBtnAddToCartClick() {
    this.props.onBtnAddToCartClick(this.props.id);
  }

  onBtnRemoveFromCartClick() {
    this.props.onBtnRemoveFromCartClick(this.props.id);
  }

  render() {
    const btnAddToCart = (
                      this.props.quantity === undefined || this.props.quantity == 0?
                      <Button onClick={this.onBtnAddToCartClick.bind(this)} 
                              variant="primary">Add to Cart
                      </Button>:
                      <CounterComponent count={this.props.quantity}
                                        onBtnIncrementClick={this.onBtnAddToCartClick.bind(this)}
                                        onBtnDecrementClick={this.onBtnRemoveFromCartClick.bind(this)} 
                      />);

    return (
      <React.Fragment>
        <Card>
          <Card.Img src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Row>
              <Col sm={"12"} md={"6"}>
                {btnAddToCart}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}