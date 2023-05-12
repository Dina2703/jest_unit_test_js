const chunkArr = (arr, len) => {
  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const len = 2;
// const chunkedArr = chunkArr(numArr, len);
// console.log(chunkedArr);
module.exports = chunkArr;
