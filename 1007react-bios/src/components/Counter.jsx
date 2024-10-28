import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { useDarkMode } from "../contexts/DarkModeContext";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [array, setArray] = useState([]);

  //Gebruik maken van de context
  //const darkModeObject = useContext(DarkModeContext);

  //Gebruik maken van onze eigen hook
  const darkModeObject = useDarkMode();

  //Referentie aan een JSX element
  //STAP 1: Nieuwe instantie referentie
  const inputRef = useRef();
  //STAP 2: koppeling maken met deze nieuwe referentie (zie textinputveld hieronder)
  //STAP 3: gebruik die inputRef.current.focus() in een type2

  // console.log("Counter component is gererenderd!");

  //useEffect

  useEffect(() => {
    console.log("useEffect type 1");
  });

  useEffect(() => {
    console.log("useEffect type 2");
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("useEffect type 3");
  }, [array]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);

    //Cleanup van onze useEffect
    return () => {
      clearInterval(timerId);
    };
  }, [counter]);

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

      <div>
        <p>Text input</p>
        <input ref={inputRef} type="text" placeholder="Vak" />
      </div>

      <p>Darkmode: {darkModeObject.isDarkMode ? "JA" : "NEE"}</p>
    </>
  );
};

export default Counter;
