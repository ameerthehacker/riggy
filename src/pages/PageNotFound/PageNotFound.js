import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default () => {
  return (
    <Container>
      <Jumbotron className="text-center">
        <h1>OOPS 404!</h1>
        <p>
          We could not find that page
        </p>
      </Jumbotron>
    </Container>
  );
}