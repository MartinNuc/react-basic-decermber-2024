export function VendingItem(props) {

  function handleClick() {
    console.log(props.name)
  }

  return (
    <button onClick={handleClick}>
      1x {props.name}
    </button>
  );
}
