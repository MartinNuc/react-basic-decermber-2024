import { VendingItem } from "./vending-item";
import styles from './vending-machine.module.css';

export function VendingMachine() {
  const items = ["Tatranka", "Fidorka", "Mars"];

  return (
    <div className={styles['items-list']}>
      {items.map((item) =>
        <VendingItem key={item} name={item} />
      )}
    </div>
  );
}
