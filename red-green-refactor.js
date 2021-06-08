export const getName = ({ name }) => {
  return name;
};

export const copyAndPush = (arr, n) => {
  const copyArr = [...arr];
  copyArr.push(n);
  return [arr, copyArr];
};

export const capitalizeAndPush = (arr) => {

  const newArr = [];

  for(const index in arr) {
    
    const capitalizedString = arr[index].toUpperCase();
    
    if(capitalizedString[0] !== 'F') {
      
      newArr[newArr.length] = capitalizedString;
    }
  }

  return newArr;
};

