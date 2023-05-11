const functions = require("./functions");

//test - passed
// test("Adds 2 + 2 to equal 4", () => {
//   expect(functions.add(2, 2)).toBe(4);
// });

//test - failed
// test("Add2 failed 2 + 2 to equal 4", () => {
//   expect(functions.add2(2, 2)).toBe(4);
// });

//test - passed
// test("Add 2 + 2 to NOT equal 5", () => {
//   expect(functions.add(2, 2)).not.toBe(5);
// });

// CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//toBeUndefined  matches only indefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statemnet treats as   true
//toBeFalsy matches anything that an if statement treats as false
test("should be false", () => {
  expect(functions.checkValue()).toBeFalsy();
});
