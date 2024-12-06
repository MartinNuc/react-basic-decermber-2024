import React from 'react';

// 1. props -> pregeneratedCount
// 2. state -> generatedNumbers
// 3. inicializace - predgenerovani podle pregeneratedCount
// 4. button -> prida nahodne cislo na konec
// 5. render -> vypisuje cisla

export class NumberGeneratorClass extends React.Component {
  constructor(props) {
    super(props);
    const generatedNumbers = [...Array(props.pregeneratedCount)].map(() => Math.random());
    this.state = {
      generatedNumbers
    };
  }

  generateNew() {
    this.setState({ generatedNumbers: [...this.state.generatedNumbers, Math.random()] });
  }

  render() {
    const { generatedNumbers } = this.state;

    return <div>
      {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
      <button type="button" onClick={() => this.generateNew()}>Generate new</button>
    </div>
  }
}