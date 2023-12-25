//> Basic Number Operations
const score = 100;
console.log(score);

const bal = new Number(100);
console.log(bal.toFixed(2));

const num1 = 28.8749;
console.log(num1.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//> Math Object
console.log(Math.PI);
console.log(Math.abs(-100));
console.log(Math.ceil(28.8749));
console.log(Math.floor(28.8749));
console.log(Math.round(28.8749));
console.log(Math.max(28, 87, 49));
console.log(Math.round(Math.random() * 10 ) + 1);

const min = 10;
const max = 20;

console.log(Math.round(Math.random() * (max - min + 1)) + min);