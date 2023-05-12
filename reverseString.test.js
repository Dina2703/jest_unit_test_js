const reversezString = require("./reverseSrting");

//test if the reversezString function exists
test("reversezString function exists", () => {
  expect(reversezString).toBeDefined();
});

//test reversezString actually reverses a string
test("string reverses", () => {
  expect(reversezString("hello")).toEqual("olleh");
});
