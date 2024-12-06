import { useEffect, useState } from "react";
import styles from "./dropdown.module.css";

export function DropdownComponent({ label, onDropdownOpened, children }) {
  const [isListVisible, setIsListVisible] = useState(false);

  // useEffect(() => {
  //   if (!isListVisible) {
  //     return;
  //   }

  //   const handleClick = () => {
  //     setIsListVisible(false);
  //   }
  //   window.addEventListener('click', handleClick)

  //   return () => window.removeEventListener('click', handleClick)
  // }, [isListVisible]);

  useEffect(() => {
    if (isListVisible) {
      onDropdownOpened();
    }
  }, [isListVisible, onDropdownOpened]);

  function handleToggleList(e) {
    e.stopPropagation();
    setIsListVisible(!isListVisible);
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleToggleList}>{label}</button>
      {isListVisible && <div className={styles.list}>{children}</div>}
    </div>
  );
}
