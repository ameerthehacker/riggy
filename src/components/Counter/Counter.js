import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import propTypes from 'prop-types';

export default class CounterComponent extends React.Component {
  static propTypes = {
    count: propTypes.number,
    onBtnIncrementClick: propTypes.func,
    onBtnDecrementClick: propTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <Button onClick={this.props.onBtnDecrementClick} variant="warning">-</Button>
        </InputGroup.Prepend>
        <Form.Control className="text-center" readOnly value={this.props.count} />
        <InputGroup.Append>
          <Button onClick={this.props.onBtnIncrementClick} variant="warning">+</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}