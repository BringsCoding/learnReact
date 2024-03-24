import React, { useState } from "react";
import "./style.css";

function Counter() {
  // useState gibt ein Array zurück: [aktuellerWert, setAktuellerWert]
  const [typeOfBodyColor, setTypeOfBodyColor] = useState("#007460");
  const [count, setCount] = useState(12);

  function setCountPlus() {
    setCount(count + 1);
    checkNum();
  }
  function setCountMinus() {
    setCount(count - 1);
    checkNum();
  }

  function checkNum() {
    if (count > 10) {
      setTypeOfBodyColor("blue");
    } else {
      setTypeOfBodyColor("gold");
    }
  }
  return (
    <div
      style={{
        background: typeOfBodyColor,
      }}
      className="bodyContainer"
    >
      <div>
        <p>Aktueller Zählerwert: {count}</p>
        <button onClick={() => setCountPlus()}>Erhöhen</button>
        <button onClick={() => setCountMinus()}>Verringern</button>
      </div>
    </div>
  );
}

export default Counter;
