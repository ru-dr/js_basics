// array specific loops ( high order functions )

let arr = [1, 2, 3, 4, 5];

// for of
for (const element of arr) {
  console.log(element);
}

console.log("\n");

let greeting = "Hello World";

// for of
for (const char of greeting) {
  console.log(char);
}

console.log("\n");

// Map

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("isMarried", false);

for (const [key, value] of map) {
  console.log(`${key} = ${value}`);
}

console.log("\n");

const games = {
  game1: "Apex Legends",
  game2: "Rainbow Six Siege",
  game3: "Valorant",
};

// object are not iterable by default so we need to use Object.entries() to make it iterable
for (const [key, value] of Object.entries(games)) {
  console.log(`${key} = ${value}`);
}
