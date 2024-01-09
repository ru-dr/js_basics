// falsy values
//> 0, "", null, undefined, NaN, false, 0n, ""

// truthy values
//> everything else
//> "0", " ", {}, [], true, 1, -1, "false"

//> Extras

// Null coalescing operator (??)
let user, age;
user = 5 ?? 10;
age = null ?? 23;

console.log(`user: ${user}, age: ${age}`);

// note: ?? takes the first truthy value otherwise the last value

//> Terinary operator (?:) condition ? true : false

let x = 5;
let y = 10;

let result = x > y ? "x is greater than y" : "x is less than or equal to y";
console.log(result);
