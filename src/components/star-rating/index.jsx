import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(8);
  const [hover, setHover] = useState(0);

  function handelClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handelMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handelMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="container">
      <div className="start-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handelClick(index)}
              onMouseMove={() => handelMouseEnter(index)}
              onMouseLeave={() => handelMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
