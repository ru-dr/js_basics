// for each

const arr = ["apple", "banana", "orange", "mango", "kiwi"];

arr.forEach((element, index, array) => {
  console.log(`${element} is at index ${index} in ${array}`);
});

console.log("\n");

//> Example

const lang = [
  {
    lang: "JavaScript",
    short: "js",
  },
  {
    lang: "Python",
    short: "py",
  },
  {
    lang: "Ruby",
    short: "rb",
  },
];

lang.forEach((item) => {
  console.log(`${item.lang} is abbreviated as ${item.short}`);
});
