import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [color, setcolor] = useState("red");
  let anothercolor = color === "red" ? "blue" : "red";
  let [disable, setdisable] = useState(false);
  return (
    <>
      <div>
        <button
          style={{ backgroundColor: color }}
          onClick={() => {
            setcolor(anothercolor);
          }}
          disabled={disable}
        >
          Change to {anothercolor}
        </button>
        <input
          type="checkbox"
          onChange={(e) => {
            setdisable(!disable);
            if (color === "red" || color === "blue") {
              setcolor("grey");
            }
            if (color === "grey") {
              if (anothercolor === "red") {
                setcolor("blue");
              } else {
                setcolor("red");
              }
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
