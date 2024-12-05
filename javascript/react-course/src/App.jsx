import "./App.css";
import {VendingMachine} from './vending-machine';
import {NumberGenerator} from './rewrite-class-component/number-generator';

function App() {
  return (
    <div>
      <h1>Hello</h1>

      <NumberGenerator pregeneratedCount={4} />

      <VendingMachine />
    </div>
  );
}

export default App;
