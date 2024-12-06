export function divideWithRemainder(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  
  const result = Math.ceil(a / b);
  const remainder = a % b;
  
  return {
    result,
    remainder
  };
}
