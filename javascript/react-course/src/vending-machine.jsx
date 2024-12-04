import { VendingItem } from "./vending-item";

export function VendingMachine() {
  const items = ["Tatranka", "Fidorka", "Mars"];

  return (
    <div>
      {items.map((item) =>
        <VendingItem key={item} name={item} />
      )}
    </div>
  );
}
