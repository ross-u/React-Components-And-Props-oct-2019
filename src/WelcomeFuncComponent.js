import React from 'react';
import User from './User';

/* function component difers from the class components in the following:
  - It doesn't have state object
  - It doesn't a render method (uses simple `return` instead )
  - It doesn't lifecycle methods

  Function component should be used when we don't need te component to have `state`,
  but we only use the props that are passed to it, or just for simple rendering of JSX elements.
 */
// If using props in the function component, we have to specify `props` as the first argument

function WelcomeFuncComponent(props) {
  console.log('PROPS', props);

  return (
    <div className="welcome">
      <h1>Welcome Func Component</h1>
      <User username={props.name} />{' '}
      {/* In function component we don't use `this` */}
    </div>
  );
}

export default WelcomeFuncComponent;
