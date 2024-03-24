import { useState } from "react";
import "./style.css";
import dataWord from "./dataWord";
import imgs from "./img/img01.jpg";

export default function Changeimg() {
  const [textColor, setTextColor] = useState("green");

  function changeTextColor(e) {
    console.log(e);
  }
  return (
    <div className="body-img">
      {/* Iterieren Sie über jedes Element in 'data' */}
      <div className="container-img">
        {dataWord.map((dataItem, index) => (
          <div key={index} className="wrapper-img">
            <h3 onClick={() => changeTextColor()}>{dataItem.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
