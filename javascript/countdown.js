function countdown(seconds) {
  let remainingSeconds = seconds;

  const intervalRef = setInterval(() => {
    console.log(remainingSeconds)
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      console.log(`Time's up`);
      clearInterval(intervalRef)
    }
  }, 1000);

  return () => clearInterval(intervalRef);
}

const cleanup = countdown(3)

setTimeout(() => cleanup(), 2500);