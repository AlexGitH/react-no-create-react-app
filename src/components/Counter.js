import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickPlus = () => {
    setCounter(counter+1);
  }

  const onClickMinus = () => {
    if (counter > 0) {
      setCounter(counter-1);
    }
  }

  return <>
    <button onClick={onClickPlus}>+</button>
    <button onClick={onClickMinus}>-</button>
    <i>{counter}</i>
  </>
}

export default Counter;
