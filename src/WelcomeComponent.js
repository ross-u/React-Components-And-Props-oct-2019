import React, { Component } from 'react';

class WelcomeComponent extends Component {
  state = {};

  render() {
    return (
      <div className="welcome">
        <h1>Welcome Component</h1>

        <p>Welcome {this.props.name}</p>
      </div>
    );
  }
}

export default WelcomeComponent;
