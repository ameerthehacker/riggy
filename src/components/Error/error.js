import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if(this.state.hasError) {
      return (
        <div class="container">
          <Jumbotron>
            <h1>OOPS!</h1>
            <p>
              Something went wrong...
            </p>
          </Jumbotron>
        </div>
      )
    }
    else {
      return this.props.children;
    }
  }
}