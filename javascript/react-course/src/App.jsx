import { VendingMachine } from "./vending-machine";
import {DropdownComponent} from './dropdown/dropdown'

function App() {
  return (
    <div>
      <DropdownComponent label="Open dropdown">
        Hello, this is dropdown!
        <button>Ahoj</button>
      </DropdownComponent>

      <DropdownComponent label="Open links">
        <a href="google.com">Google.com</a>
      </DropdownComponent>

      <h1>Hello</h1>
      <VendingMachine />
    </div>
  );
}

export default App;
