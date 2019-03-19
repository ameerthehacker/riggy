import React from 'react';
import { Card, Button } from 'react-bootstrap';
import propTypes from 'prop-types';

export class ProductComponent extends React.Component {
  static propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    image: propTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Img src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}