import React, { useState, useRef } from "react";
import { VendingItem } from "./vending-item";
import styles from "./vending-machine.module.css";
import { DropdownComponent } from "./dropdown/dropdown";
import cn from 'classnames';

export const ThemeContext = React.createContext();

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

  const [theme, setTheme] = useState('dark');
  
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

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const totalPrice = cart
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0);

  const inputRef = useRef(null);

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>{theme === 'dark' ? '🌕' : '🌑'}</button>
      <div className={cn({
          [styles["items-list"]]: true,
          [styles["light"]]: theme === 'light',
        })}>
        <div data-testid="totalPrice">Total price: {totalPrice},-</div>
        <div>Coins: {wallet},-</div>
        <DropdownComponent label="🪙 Insert coin" onDropdownOpened={() => inputRef.current.focus()}>
          <button onClick={() => chargeCoins(10)}>+10 coins</button>
          <button onClick={() => chargeCoins(20)}>+20 coins</button>
          <button onClick={() => chargeCoins(50)}>+50 coins</button>
          Custom amount: <input type="number" ref={inputRef} />
        </DropdownComponent>

        {items.map((item) => (
          <VendingItem
            key={item.name}
            item={item}
            onItemClicked={() => addToCart(item)}
          />
        ))}
      </div>
    </ThemeContext.Provider>
  );
}
