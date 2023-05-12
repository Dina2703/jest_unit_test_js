const chunkArr = require("./chunk");

//check if the function exists
test("chunkArr func exists", () => {
  expect(chunkArr).toBeDefined();
});

//test case 1
test("Chunk an array of 10 values with length of 2", () => {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArr(numArr, len);
  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

//test case 2
test("Chunk an array of 3 values with length of 1", () => {
  const numArr = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArr(numArr, len);
  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
