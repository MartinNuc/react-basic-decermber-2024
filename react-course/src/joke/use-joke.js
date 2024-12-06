import { useEffect, useState } from "react";
import axios from 'axios';

export const useJoke = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    joke,
    isLoading,
    loadNext: fetchJoke
  }
}