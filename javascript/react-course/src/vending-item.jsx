import { useState } from "react";

export function VendingItem(props) {

  const [availableCount, setAvailableCount] = useState(5);

  function handleClick() {
    if (availableCount <= 0) {
      return;
    }

    setAvailableCount(availableCount - 1);
  }

  return (
    <button onClick={handleClick}>
      {availableCount}x {props.name}
    </button>
  );
}
