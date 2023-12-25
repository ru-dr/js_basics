let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// < other conversion operations >
// Number() => converts to number
// String() => converts to string
// Boolean() => converts to boolean

// < examples >
// "33" => 33
// null => 0
// undefined => NaN
// true => 1
// false => 0
// "hello" => NaN

// >>>>>>>>>>>>>>>>> Operaions <<<<<<<<<<<<<<<< //

let value = 10;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

let str1 = "hello";
let str2 = " world";
console.log(str1 + str2);

// ^ warning brain teaser ^ // ( all the weird stuff below is described by ECMAScript)
console.log(2 + 2 + "2");
console.log(2 + "2" + 2);
console.log("2" + 2 + 2);

console.log(3 * 2 / 4 - 1 + 7 % 3 ** 2); // ! why the hell you want to write this kind of code, use brackets
console.log(3 * (2 / 4) - 1 + (7 % 3) ** 2); // ! this is better

let gameCounter = 0;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

let gameLives = 3;
gameLives--;
console.log(gameCounter);
--gameLives;
console.log(gameCounter);

// note: in prefix value is incremented first and then assigned, in postfix value is assigned first and then incremented



// > go ahead and play with the above code