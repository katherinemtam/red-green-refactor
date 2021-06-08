import fetch from 'node-fetch';

export const getName = ({ name }) => {
  return name;
};

export const copyAndPush = (arr, n) => {
  const copyArr = [...arr];
  copyArr.push(n);
  return [arr, copyArr];
};

export const capitalizeAndFilter = (arr) => {

  const newArr = arr
    .map(index => index.toUpperCase())
    .filter(capitalizedString => capitalizedString[0] !== 'F');

  return newArr;
};

export const fetchQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));

};
