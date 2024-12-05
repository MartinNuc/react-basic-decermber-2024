import { useState } from "react";
import { VendingItem } from "./vending-item";
import styles from "./vending-machine.module.css";
import { DropdownComponent } from "./dropdown/dropdown";

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
  const [wallet, setWallet] = useState(0);

  function addToCart(addedItem) {
    setItems(
      items.map((item) =>
        item === addedItem ? { ...item, count: item.count - 1 } : item
      )
    );
    setCart([...cart, addedItem]);
  }

  function chargeCoins(amount) {
    setWallet(wallet + amount);
  }

  const totalPrice = cart
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles["items-list"]}>
      <div>Total price: {totalPrice},-</div>
      <div>Coins: {wallet},-</div>
      <DropdownComponent label="🪙 Insert coin">
        <button onClick={() => chargeCoins(10)}>+10 coins</button>
        <button onClick={() => chargeCoins(20)}>+20 coins</button>
        <button onClick={() => chargeCoins(50)}>+50 coins</button>
      </DropdownComponent>

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
