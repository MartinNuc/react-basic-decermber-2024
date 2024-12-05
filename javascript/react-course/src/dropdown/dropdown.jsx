import { useState } from "react";
import styles from "./dropdown.module.css";

export function DropdownComponent({ label, children }) {
  const [isListVisible, setIsListVisible] = useState(false);

  function handleToggleList() {
    setIsListVisible(!isListVisible);
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleToggleList}>{label}</button>
      {isListVisible && <div className={styles.list}>{children}</div>}
    </div>
  );
}
