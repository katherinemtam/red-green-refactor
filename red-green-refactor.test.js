import { getName } from './red-green-refactor.js';

describe('getName function', () => {
  test('returns the name property of an object', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    getName(spot);
  });
});
