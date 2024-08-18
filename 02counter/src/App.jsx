import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;
    if (counter == 20) {
      console.log("Cannot go beyond 20");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if(counter > 0) {
    setCounter(counter - 1);
    } else {
      console.log("Cannot be less than zero");
      
    }
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
