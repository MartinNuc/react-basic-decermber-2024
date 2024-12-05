import {useState} from 'react';

export function NumberGenerator({pregeneratedCount}) {
  const [generatedNumbers, setGeneratedNumber] = useState(
    () => [...Array(pregeneratedCount)].map(() => Math.random())
  );

  function generateNew() {
    generatedNumbers.push(Math.random());
    const novyVariable = generatedNumbers
    setGeneratedNumber([...novyVariable]);
  }

  return <div>
    {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
    <button type="button" onClick={() => generateNew()}>Generate new</button>
  </div>
}