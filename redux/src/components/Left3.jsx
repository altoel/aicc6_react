import React from 'react';
import { useSelector } from 'react-redux';

const Left3 = () => {
  const number = useSelector((state) => state.number);
  console.log(number);
  return (
    <div>
      <h2>Left3: {number}</h2>
    </div>
  );
};

export default Left3;
