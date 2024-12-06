import styles from './semaphor.module.css'
import { useState } from 'react';
import cn from 'classnames';

export function Semaphor() {
  const [redColor, setRedColor] = useState(false);
  const [blueBackground, setBlueBackground] = useState(false);
  
  const styleObject = {
    [styles.redColor]: redColor,
    [styles.blueBackground]: blueBackground,
  };

  return <div className={cn(styleObject)}>
    <button onClick={() => setRedColor(!redColor)}>Toogle color</button>
    <button onClick={() => setBlueBackground(!blueBackground)}>Toggle background</button>
    Semaphor
  </div>
}