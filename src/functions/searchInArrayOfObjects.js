export const searchInputInArrayOfObjects = (array, key, value) => {
  // console.log(array[0][key], value);

  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
};
