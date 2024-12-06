import { it, expect } from 'vitest';
import { divideWithRemainder } from './divide-with-remainder';

it('0/3 = 0 zb 0', () => {
  const result = divideWithRemainder(0, 3);
  expect(result.result).toBe(0);
  expect(result.remainder).toBe(0);
})
it.todo('10/3 = 3 zb 1')
it.todo('fails when dividing by zero')