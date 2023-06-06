import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelwithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  let [color, setcolor] = useState("red");
  let anothercolor = color === "red" ? "blue" : "red";
  let [disable, setdisable] = useState(false);
  return (
    <>
      <div>
        <button
          style={{ backgroundColor: disable ? "gray" : color }}
          onClick={() => {
            setcolor(anothercolor);
          }}
          disabled={disable}
        >
          Change to {anothercolor}
        </button>
        <input
          type="checkbox"
          defaultChecked={disable}
          onChange={(e) => setdisable(e.target.checked)}
        />
      </div>
    </>
  );
}

export default App;
