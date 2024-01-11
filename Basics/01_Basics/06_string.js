const uname = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + uname + ' and I am ' + age); //> this is old way of concatenation

console.log(`My name is ${uname} and I am ${age}`); //> this is new way of concatenation, its called string interpolation

const str = new String('Rainbow Six Siege');
console.log(str[0]); 

// String Methods ( some of them )
const newStr = str.split(' ');
console.log(newStr);

const anotherStr = str.slice(-(str.length), 4);
console.log(anotherStr);

const newStringOne = str.substring(0, 7);
console.log(newStringOne);

const newStringTwo = "    Minecraft    ";
console.log(newStringTwo.trim());

const url = 'https://www.google.com';
console.log(url.replace('google', 'microsoft'))
console.log(url.includes('google'));

const testString = 'Apple-Orange-Mango';
console.log(testString.split('-'));