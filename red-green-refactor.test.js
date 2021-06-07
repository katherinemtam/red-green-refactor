import { getName } from './red-green-refactor.js';

describe('getName function', (object) => {
  test('returns the name property of an object', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    getName(spot);
  });
});
