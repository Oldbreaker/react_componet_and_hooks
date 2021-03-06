import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value); // esto regresa un arreglo

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c)=> c+1); otra forma de hacerlo
  };

  //handleSub
  const handleSub = () => {
    setCounter(counter - 1);
  };

  const Reset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleSub}>-1</button>
    </>
  );
};

CounterApp.defaultProps = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
