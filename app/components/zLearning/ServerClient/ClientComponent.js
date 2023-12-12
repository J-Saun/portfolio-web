"use client";

import { useContext } from "react";
import { counterContext } from "./CounterContext";

const ClientComponent = ({ children }) => {
  const { count, setCount } = useContext(counterContext);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>{children}</div>
    </div>
  );
};

export default ClientComponent;
