import React from 'react';

const AuthInput = props => {
  return (
    <input type={props.type} onChange={props.validation}/>
  );
};

export default AuthInput;
