export const getName = ({ name }) => {
  return name;
};

export const copyAndPush = (arr, n) => {
  const copyArr = arr.slice();
  copyArr.push(n);
  return [arr, copyArr];
};
