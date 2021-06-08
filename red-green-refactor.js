export const getName = ({ name }) => {
  return name;
};

export const copyAndPush = (arr, n) => {
  const copyArr = [...arr];
  copyArr.push(n);
  return [arr, copyArr];
};

export const capitalizeAndPush = (arr) => {

  const newArr = arr
    .map(index => index.toUpperCase())
    .filter(capitalizedString => capitalizedString[0] !== 'F');

  return newArr;
};

