import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

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
        <Container>
          <Jumbotron className="text-center">
            <h1>OOPS!</h1>
            <p>
              Something went wrong...
            </p>
          </Jumbotron>
        </Container>
      )
    }
    else {
      return this.props.children;
    }
  }
}