import { it, expect } from 'vitest';
import { divideWithRemainder } from './divide-with-remainder';

it('0/3 = 0 zb 0', () => {
  const result = divideWithRemainder(0, 3);
  expect(result.result).toBe(0);
  expect(result.remainder).toBe(0);
})

it('10/3 = 3 zb 1', () => {
  const result = divideWithRemainder(10, 3);
  expect(result.result).toBe(3);
  expect(result.remainder).toBe(1);
})

it('fails when dividing by zero', () => {
  expect(() => divideWithRemainder(5, 0)).toThrow();
})