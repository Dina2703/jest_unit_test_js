const reverseStr = (str) => {
  return str.toLowerCase().split("").reverse().join("");
};
console.log(reverseStr("hello"));

// const str = "hello";
// const reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

module.exports = reverseStr;
