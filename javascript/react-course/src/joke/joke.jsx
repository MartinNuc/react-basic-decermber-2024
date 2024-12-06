import { useJoke } from "./use-joke"

export function Joke() {
  const {joke, isLoading, loadNext} = useJoke();
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  return <div>
    <button onClick={loadNext}>Load next</button>
    {joke}
  </div>
}