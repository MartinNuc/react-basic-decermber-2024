import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/joke">Joke</Link>
      </li>
      <li>
        <Link to="/vending-machine">Vending machine</Link>
      </li>
    </ul>
  );
}
