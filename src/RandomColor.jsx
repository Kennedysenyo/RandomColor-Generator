import { useState, useEffect } from "react";

const RandomColor = () => {
  const [colorFormat, setColorFormat] = useState("hex")
  const [color, setColor] = useState("#ffffff")


  function generateHEXColor() {
    generateRandomColor("hex")
    setColorFormat("hex");
  }
  
  function generateRGBColor() {
    setColorFormat("rgb");
    generateRandomColor("rgb")
  }
    
  function generateRandomColor(format) {
    const currentFormat = format || colorFormat;

    if (currentFormat === "hex") {     
      const hexColor = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 16).toString(16).toUpperCase()
      ).join("");
      setColor(`#${hexColor}`);
    } else {      
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      setColor(`rgb(${red}, ${green}, ${blue})`);
    }   
  }
  
  document.getElementById("root").style.backgroundColor = color;


  return (
    <>
      <div className="container">
        <div>
        <button onClick={generateHEXColor}>Create HEX Color</button>
        <button onClick={generateRGBColor}>Create RGB Color</button>
        </div>
        <button onClick={() => generateRandomColor()}>Generate Random Color</button>
      </div>
      <h1>{color}</h1>
    </>
  )
}

export default RandomColor;