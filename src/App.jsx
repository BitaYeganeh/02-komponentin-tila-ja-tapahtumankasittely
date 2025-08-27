import "./App.css";

import { useState } from "react";

const Display = ({ counter }) => 
<p className="counterin-arvo">{counter}</p>;

const Button = ({ onClick, text }) => 
<button className="nappi" onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("Rendering with default counter value", counter);

  const increaseByOne = () => {
    console.log("Increaseing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("Decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("Resetting to Zero, value before", counter);
    setCounter(0);
  };

  return (
    <>
      <Display counter = {counter}/>

      <Button onClick={increaseByOne} text="Plus"/>
      <Button onClick={setToZero} text="Zero"/>
      <Button onClick={decreaseByOne} text="Minus"/>


      
    </>
  );
};

export default App;
