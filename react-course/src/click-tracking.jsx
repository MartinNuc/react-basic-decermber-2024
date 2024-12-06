import { useEffect, useState } from "react";

export function ClickTracking() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    function clickHandler(event) {
      setPositions((positions) => [
        ...positions,
        {
          x: event.clientX,
          y: event.clientY,
        },
      ]);
    }

    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, []);

  return (
    <ul>
      {positions.map((position, index) => (
        <li key={index}>
          X: {position.x}, Y: {position.y}
        </li>
      ))}
    </ul>
  );
}
