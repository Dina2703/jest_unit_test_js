const functions = {
  //with arrow function(short and clean syntax)
  add: (num1, num2) => num1 + num2,
  //regular function
  add2: function (num1, num2) {
    return num1 + num2 + 1;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Sam",
    };
    user["lastName"] = "Yomoda";
    return user;
  },
};
console.log(functions.createUser());

module.exports = functions;
