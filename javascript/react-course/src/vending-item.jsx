import { useState } from "react";
import styles from "./vending-item.module.css";

export function VendingItem(props) {
  const [availableCount, setAvailableCount] = useState(5);

  const outOfStock = availableCount === 0;

  function handleClick() {
    if (availableCount <= 0) {
      return;
    }

    setAvailableCount(availableCount - 1);
  }

  return (
    <>
      <button
        className={outOfStock ? styles["out-of-stock-background"] : null}
        onClick={handleClick}
      >
        {availableCount}x {props.name}
      </button>

      {outOfStock && <div className={styles["out-of-stock"]}>Out of stock</div>}
    </>
  );
}
