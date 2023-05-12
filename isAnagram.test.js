const isAnagram = require("./isAnagram");

//test existense of the function
test("is isAnagram function exists", () => {
  // expect(isAnagram).toBeDefined();//OR
  expect(typeof isAnagram).toEqual("function");
});

//test case 1
test("is 'hello' anagram of 'elloh", () => {
  const str1 = "hello";
  const str2 = "elloh";
  const myFn = isAnagram(str1, str2);
  expect(myFn).toBeTruthy();
});

//test case 2. the function removes all the white spaces, any non-word chars and case insensitive
test("is 'iceman' anagram of 'Cinema##' ", () => {
  expect(isAnagram("iceman", "cinema")).toBeTruthy();
});
