import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [array, setArray] = useState<number[]>([]);

  return (
    <>
      <p>Counter: {counter}</p>
      <Button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setArray([...array, counter]);
        }}
      >
        Voeg Toe
      </Button>
      <ul className="list-disc list-inside p-4">
        {array.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
    </>
  );
};

export default Counter;
