import React, { useState } from "react";

const App = () => {
  const [prevColor, setPrevColor] = useState(new Array(3).fill(""));
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(-1);
  const [myColor, setMyColor] = useState("");
  
  const changeColor = (e: string): void => {
    e = e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase();
    e = e.trim();
    setColor(e);

    if (isValidColor(e)) {
      prevColor[index] = e;
      setPrevColor(prevColor);

      const newIndex = (index + 1) % 3;
      setIndex(newIndex);
    }
  }

  const changeMyColor = (color: string): void => {
    setMyColor(color);
  }

  const isValidColor = (color: string): boolean => {
    const s = new Option().style;
    s.backgroundColor = color;
    return s.backgroundColor !== "";
  }

  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-screen flex-col">
        <p>Pick a color</p>
        <div className="w-30 h-30 border-1 mb-10" style={{ backgroundColor: myColor }} />
        <p>Current Color</p>
        <div className="w-30 h-30 border-1" style={{ backgroundColor: color }} />
        <input type="text" placeholder="Type new color..." className="border-1 mt-5 p-2" value={color} onChange={e => changeColor(e.target.value)} id="square" />

        <div className="relative top-10 float-left">
          Color: {color}
        </div>

        <div className="text-center mt-15">
          {isValidColor(color) ? (<p>Valid</p>) : (<p>Invalid</p>)}
          {index + 1}
        </div>

        <div className="grid grid-cols-3 gap-20 mt-5">
          <button className="w-30 h-30 border-1" onClick={() => changeMyColor(prevColor[0])} style={{ backgroundColor: prevColor[0] }} />
          <button className="w-30 h-30 border-1" onClick={() => changeMyColor(prevColor[1])} style={{ backgroundColor: prevColor[1] }} />
          <button className="w-30 h-30 border-1" onClick={() => changeMyColor(prevColor[2])} style={{ backgroundColor: prevColor[2] }} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App