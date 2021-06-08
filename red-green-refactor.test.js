import { getName } from './red-green-refactor.js';

describe('getName function', () => {
  test('returns the name property of an object', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    const dog = getName(spot);
    expect(dog).toEqual('spot');
  });
});

describe('copyAndPush function', () => {
  test('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArr = copyAndPush(numbers, 4);

    expect(newArr).toEqual([1, 2, 3, 4]);
  });
});
