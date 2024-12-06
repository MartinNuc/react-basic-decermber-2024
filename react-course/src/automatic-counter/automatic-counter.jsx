import { useEffect, useState } from "react"

export const AutomaticCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000);
    
    return () => clearInterval(intervalRef)
  }, []);

  console.log('render', counter)

  return <>{counter}</>
}


let value = null;
function setCounter(valueOrFn) {
  if (typeof valueOrFn === 'function') {
    // functional
    value = valueOrFn(value)
  } else {
    value = valueOrFn;
  }

}