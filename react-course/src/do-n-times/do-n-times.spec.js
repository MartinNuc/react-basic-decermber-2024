import {it, vitest, expect} from 'vitest'
import { doNTimes } from './do-n-times'

it('calls the function n times', () => {
  const mock = vitest.fn();
  doNTimes(mock, 3);
  expect(mock).toHaveBeenCalledTimes(3);
})