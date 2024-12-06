import { useContext, useImperativeHandle } from "react";
import styles from "./vending-item.module.css";
import {ThemeContext} from './vending-machine';
import cn from 'classnames';

export function VendingItem({ item, onItemClicked }) {
  const { name, count, price } = item;

  const theme = useContext(ThemeContext);

  const outOfStock = count === 0;

  function handleClick() {
    if (count <= 0) {
      return;
    }

    onItemClicked()
  }

  return (
    <div>
      <button
        disabled={outOfStock}
        className={cn({
          [styles["out-of-stock-background"]]: outOfStock,
          [styles["light"]]: theme === 'light',
        })}
        onClick={handleClick}
      >
        {count}x
      </button>
      {name} ({price},-)
      {outOfStock && <div className={styles["out-of-stock"]}>Out of stock</div>}
    </div>
  );
}
