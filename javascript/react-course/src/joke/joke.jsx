import { useEffect, useState } from "react";
import axios from 'axios';

export function Joke() {

  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  if (!joke) {
    return <div>Loading...</div>
  }

  function fetchJoke() {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      setJoke(response.data.value);
    })
  }

  return <div>
    <button onClick={fetchJoke}>Load next</button>
    {joke}
  </div>
}