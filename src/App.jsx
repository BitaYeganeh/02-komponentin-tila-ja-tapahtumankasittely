import "./App.css";

import { useState } from "react";

//Display component
const Display = ({ counter }) => 
<p className="counterin-arvo">{counter}</p>;

//Button component
const Button = ({ onClick, text }) => 
<button className="nappi" onClick={onClick}>{text}</button>;

//history component
const History = ({ history }) => {
  if (history.length === 0) {
    return (
      <p>
        <span className="note">Note:</span> No button is pressed yet!
      </p>
    );
  }

  return <p>History: {history.join(" ")}</p>;
};



 

const App = () => {

  //main counter + history:

  const [counter, setCounter] = useState(0);
        console.log("Rendering with default counter value", counter);
  //Add a new state array for history
  const [history, setHistory] = useState([]);

  //left-right counters
  const [clicks, setClicks] = useState({left: 0, right:0});

  //Array to track all clicks (array task)
  const [allClicks, setAllClicks] = useState([]);

  //total counter
  const [total, setTotal] = useState(0);


    //Main Handlers - counter:
  const increaseByOne = () => {
        console.log("Increaseing, value before", counter);
        setCounter(counter + 1);
        setHistory(history.concat("plus"));//add "plus" to history
  };
  const decreaseByOne = () => {
        console.log("Decreasing, value before", counter);
        setCounter(counter - 1);
        setHistory(history.concat("Minus"));
  };
  const setToZero = () => {
        console.log("Resetting to Zero, value before", counter);
        setCounter(0);
        setHistory(history.concat("Zero"));
  };

  //Left-Right handlers
const handleLeftClick = () => {
  setAllClicks([...allClicks, 'L']); // create a new array
  setClicks({ ...clicks, left: clicks.left + 1 });

setTotal(prevTotal => prevTotal + 1)
};

const handleRightClick = () => {
  setAllClicks([...allClicks, 'R']); // create a new array
  setClicks({ ...clicks, right: clicks.right + 1 });
setTotal(prevTotal => prevTotal + 1)
};




 

  return (
<div>
      {/* Left/Right counters */}
      <div className="two-counters">
        <p>Left counter: <Display counter={clicks.left} /></p>
        <Button onClick={handleLeftClick} text="Left" />

        <p>Right counter: <Display counter={clicks.right} /></p>
        <Button onClick= {handleRightClick} text="Right" />

      {/* Total pressed after left/right buttons */}
      <p>Total buttons pressed: {total}</p>
      </div>

      <hr />

    {/* Main counter */}
      <p>Main counter: <Display counter={counter} /></p>
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setToZero} text="Zero" />
      <Button onClick={decreaseByOne} text="Minus" />
      
      <hr />

            {/* History */}
      <History history={history} />
      <hr />
      {/* All clicks array */}
      <p>All clicks: {allClicks.join("")}</p>
     
    </div>
  );
};
   


export default App;
