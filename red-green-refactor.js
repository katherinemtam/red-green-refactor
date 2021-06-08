export const getName = ({ name }) => {
  return name;
};

export const copyAndPush = (arr, n) => {
  const copyArr = arr; 
  copyArr.push(n);
  return copyArr;
};
