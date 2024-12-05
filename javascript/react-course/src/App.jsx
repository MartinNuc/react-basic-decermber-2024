import {VendingMachine} from './vending-machine';
import {NumberGenerator} from './rewrite-class-component/number-generator';
import {MyMouse} from './mouse-position/my-mouse'
import {AutomaticCounter} from './automatic-counter/automatic-counter'
import {ClickTracking} from './click-tracking'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <hr />
      <ClickTracking />
      <hr />
      <AutomaticCounter />
      <MyMouse />
      <NumberGenerator pregeneratedCount={4} />

      <VendingMachine />
    </div>
  );
}

export default App;
