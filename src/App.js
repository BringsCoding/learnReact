import "./App.css";
import Accordian from "./components/accaordion";
import RandomColor from "./components/random-color";
import Counter from "./components/learn-usestate";
import StarRating from "./components/star-rating";
import Changeimg from "./components/change-img";
import LoadMoreData from "./components/loade-more-button";

function App() {
  return (
    <div className="App">
      <Accordian></Accordian>
      <RandomColor></RandomColor>
      <Counter></Counter>
      <StarRating noOfStars={10}></StarRating>
      <Changeimg></Changeimg>
      <LoadMoreData></LoadMoreData>
    </div>
  );
}

export default App;
