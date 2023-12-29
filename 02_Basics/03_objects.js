// note : two ways to create an object
//> singleton and object literal

//^ singleton
// Object.create

//^ object literal
const newSymbol = Symbol("key1");

const userDetais = {
  name: "John",
  "full name": "John Doe",
  age: 34,
  country: "USA",
  address: "12, Main Street, New York",
  [newSymbol]: "This is a new symbol", // the only & correct way to use a symbol as a key
};



//note two ways to access the object properties
//> dot notation
//> bracket notation

console.log(userDetais.name);
console.log(userDetais["name"]); // its used to access the object properties that has spaces in between. Ex: "first name"
console.log(userDetais[newSymbol]);
console.log(userDetais);



//> lets see how to freeze an object
// Object.freeze(userDetais);
//note: after freezing the object we cannot add, delete or modify the object properties



//> lets see how to seal an object
// Object.seal(userDetais);
//note: after sealing the object we cannot add or delete the object properties but we can modify the object properties



//> functions in objects
userDetais.getDetails = function () {
  return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
};

console.log(userDetais.getDetails());