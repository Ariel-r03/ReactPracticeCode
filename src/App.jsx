import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);

  const handleClick = (e) => {
    console.log(e.clientX, e.clientY);
    setPoints([
      ...points,
      {
        cordx: e.clientX,
        cordy: e.clientY,
      },
    ]);
  };

  const undomethod=()=>{
    const newPoints=[...points]
    newPoints.pop(); //Estudiar metodo POP
    setPoints(newPoints)
  }

  const redomethod=()=>{
    setPoints([])
  }

  return (
    <>
      <div className="buttons-container">
        <button onClick={undomethod}>UNDO</button>
        <button onClick={redomethod}>REDO</button>
      </div>
      <div onClick={handleClick} className="full_screen">
        {points.map((point, index) => (
          <div
            style={{
              position: "absolute",
              top: `${point.cordy -20}px`,
              left: `${point.cordx - 20}px`,
            }}
            key={index}
            className="circle"
          >{console.log(index)}</div>
        ))}
      </div>
    </>
  );
}

export default App;
