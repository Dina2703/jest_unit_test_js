//main function
const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

//helper function
const formatStr = (str) => {
  const formattedStr = str
    .replace(/[^\w/]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

module.exports = isAnagram;
