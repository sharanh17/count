
import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // const [decrement, SetDecrement] = useState(0);

  const handleInc = (e) => {
    setCount(count + 1);
  };
  const handleDec = (e) => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p1>{count}</p1>
      <br />

      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

