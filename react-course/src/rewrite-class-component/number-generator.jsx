import {useState} from 'react';

export function NumberGenerator({pregeneratedCount}) {
  const [generatedNumbers, setGeneratedNumber] = useState(
    () => [...Array(pregeneratedCount)].map(() => Math.random())
  );

  function generateNew() {
    setGeneratedNumber([...generatedNumbers, Math.random()]);
  }

  return <div>
    {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
    <button type="button" onClick={() => generateNew()}>Generate new</button>
  </div>
}