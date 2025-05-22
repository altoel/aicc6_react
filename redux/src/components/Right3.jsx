import React from 'react';
import { useDispatch } from 'react-redux';

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input
        type="button"
        value="+"
        onClick={() => dispatch({ type: 'PLUS' })}
      />
    </div>
  );
};

export default Right3;
