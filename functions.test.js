const functions = require("./functions");

//beforeEach() and afterEach()functions allow to run a function before and after each test gets run.
const initialDatabase = () => console.log("Database initialized");
const closedDatabase = () => console.log("Database closed");

// beforeEach(() => initialDatabase());
// afterEach(() => closedDatabase());

//beforeAll() and afterAll()functions allow to run a function before and after ALL tests get run.

// beforeAll(() => initialDatabase());
// afterAll(() => closedDatabase());

//target for sertain functions, to run a specific function after or/and before they get run

const nameCheck = () => console.log("Checking Name");

describe("Check names", () => {
  beforeEach(() => nameCheck());

  test('User is "Jack"', () => {
    const user = "Jack";
    expect(user).toBe("Jack");
  });

  test('User is "Olivia"', () => {
    const user = "Olivia";
    expect(user).toBe("Olivia");
  });
});

//test - passed
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//test - failed
// test("Add2 failed 2 + 2 to equal 4", () => {
//   expect(functions.add2(2, 2)).toBe(4);
// });

//test - passed
test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

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

// REMEMBER: .toBe() works only for primitive types, for objects use .toStrictEqual() method

//toStrictEqual()
test("User should be Sam Yomoda object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Sam",
    lastName: "Yomoda",
  });
});

//less than & greater than. In this example we write the script rightt inside the test unit.
test("Should be under 1000", () => {
  const num1 = 300;
  const num2 = 600;
  expect(num1 + num2).toBeLessThan(1000);
});
//OR
test("Should be under  or equal 1000", () => {
  const num1 = 300;
  const num2 = 600;
  expect(num1 + num2).toBeLessThanOrEqual(1000);
});

//
//test Regex. little 'i' at the end to make case sentitive(lower and upper case)
// test("There is no I in team", () => {
//   expect("teami").not.toMatch(/I/i);
// });

//Arrays
// test("admin should be in usernames", () => {
//   users = ["anna", "sam", "kale"];
//   expect(users).toContain("john");
// });

//------test async functions//working with async data -----------
test("user fecthed name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
//test with async / await
test("user fecthed name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
