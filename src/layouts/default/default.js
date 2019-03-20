import React from 'react';
import NavbarContainer from '../../containers/Navbar/Navar';

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarContainer />
        <div className="container">
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}