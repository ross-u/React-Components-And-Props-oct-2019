import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah',
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <p> Welcome to {this.props.cityObj.myFavCity} </p>
      </div>
    );
  }
}

export default MyComponent;
