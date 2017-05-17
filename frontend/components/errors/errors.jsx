import React from 'react';

const Errors = ({errors}) => {
  return (
    <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    </ul>
  );
};

export default Errors;
