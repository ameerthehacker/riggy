import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export class AboutComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
        <h1>Riggy!</h1>
        <p>
          This is a simple online food delivery app mimicking swiggy built with <strong>React, Redux, React Router</strong>
        </p>
        <p>
          <a class="btn btn-outline-warning">View on Github</a>
        </p>
        </Jumbotron>
      </React.Fragment>
    )
  }
}