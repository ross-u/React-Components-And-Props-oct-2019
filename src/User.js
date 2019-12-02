import React from 'react';

function User(props) {
  return (
    <div className="user">
      <h1>User Component</h1>
      <p>User: {props.username}</p>
    </div>
  );
}

export default User;
