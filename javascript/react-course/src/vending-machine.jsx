import { useState } from "react";
import { VendingItem } from "./vending-item";
import styles from "./vending-machine.module.css";

export function VendingMachine() {
  const [items, setItems] = useState([
    {
      name: "Tatranka",
      count: 5,
      price: 3,
    },
    {
      name: "Fidorka",
      count: 5,
      price: 7,
    },
    {
      name: "Mars",
      count: 5,
      price: 10,
    },
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(addedItem) {
    setItems(
      items.map((item) =>
        item === addedItem ? { ...item, count: item.count - 1 } : item
      )
    );
    setCart([...cart, addedItem]);
  }

  const totalPrice = cart.map(item => item.price).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles["items-list"]}>
      Total price: {totalPrice},-

      {items.map((item) => (
        <VendingItem
          key={item.name}
          item={item}
          onItemClicked={() => addToCart(item)}
        />
      ))}
    </div>
  );
}
