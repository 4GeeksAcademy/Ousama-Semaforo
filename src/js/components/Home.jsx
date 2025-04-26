import React, { useState } from "react";

// Definir el componente Home
function Semaforo() {
  const [color, setColor] = useState("red");

  const handleClick = (brillo) => {
    setColor(brillo);
  };

  return (
    <div className="semaforo">
      <div
        className={`bombilla rojo ${color === "rojo" ? "brillo" : ""}`}
        onClick={() => handleClick("rojo")}
      ></div>
      <div
        className={`bombilla amarillo ${color === "amarillo" ? "brillo" : ""}`}
        onClick={() => handleClick("amarillo")}
      ></div>
      <div
        className={`bombilla verde ${color === "verde" ? "brillo" : ""}`}
        onClick={() => handleClick("verde")}
      ></div>
    </div>
  );
}

export default Semaforo;

