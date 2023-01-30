import { helloFunction } from '../public/index.js';

test('Testing jest config', () => {
  expect(helloFunction()).toBe('hello');
});
