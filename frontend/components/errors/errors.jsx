import React from 'react';

const Errors = ({errors}) => {
  if (typeof errors[0] === 'undefined') {
    return <div></div>;
  } else if (typeof errors[0] === 'string') {
    return (
      <ul>
        {errors.map((error, idx) => <li className="login-error"key={idx}>{error}</li>)}
      </ul>
    );
  } else {
    return (
      <ul>
        {errors[0].map((error, idx) => <li key={idx} className="login-error">{error}</li>)}
      </ul>
    );
  }
};

export default Errors;
