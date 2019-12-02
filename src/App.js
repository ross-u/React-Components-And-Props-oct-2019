import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import WelcomeComponent from './WelcomeComponent';
import WelcomeFuncComponent from './WelcomeFuncComponent';
import ReactPlayer from 'react-player';

const obj = {
  myFavCity: 'IronHack City',
};

/* Class component difers from the function components in the following:
  - It has state object
  - It has a render method (every class component must include a render method)
  - It has lifecycle methods
 */
class App extends React.Component {
  state = {
    city: 'Irohack City',
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>

        <MyComponent cityObj={obj} />

        <WelcomeComponent name="Sarah" />

        <WelcomeFuncComponent customProp name="Bob's Sister" />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=giQ8xEWjnBs"
          controls
        />
      </div>
    );
  }
}

export default App;
