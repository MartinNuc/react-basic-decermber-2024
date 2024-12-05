import styles from "./vending-item.module.css";

export function VendingItem({ item, onItemClicked }) {
  const { name, count, price } = item;

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
        className={outOfStock ? styles["out-of-stock-background"] : null}
        onClick={handleClick}
      >
        {count}x
      </button>
      {name} ({price},-)
      {outOfStock && <div className={styles["out-of-stock"]}>Out of stock</div>}
    </div>
  );
}
