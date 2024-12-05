import { useEffect } from "react";
import { VendingItem } from "./vending-item";
import styles from './vending-machine.module.css';

export function VendingMachine() {
  const items = ["Mars"];
  // const items = ["Tatranka", "Fidorka", "Mars"];


  useEffect(() => {
    console.log('on mount')
  }, []);


  return (
    <div className={styles['items-list']}>
      {items.map((item) =>
        <VendingItem key={item} name={item} />
      )}
    </div>
  );
}
