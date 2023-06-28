import { FC, useState } from "react";
import Name from "../types/e-name";

interface IProps  {
    name : Name
}

const Counter : FC<IProps> = ({name}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>name : {name}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>count : {count}</p>
    </div>
  );
};

export default Counter;
