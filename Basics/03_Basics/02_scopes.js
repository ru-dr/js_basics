let user = "John";
var age = 25;
const birthYear = 1995;

if (true) {
  let user = "Mike";
  var age = 30;
  const birthYear = 1990;
  console.log("Inside the block: ", user, age, birthYear);
}

console.log("Outside the block: ", user, age, birthYear);

//note : as you can see, the var variable is changed inside the block, but the let and const variables are not changed. This is because the var variable is function scoped, while the let and const variables are block scoped.

//! so avoid using var, use let and const instead.

//note: in node js, the global scope is the window object, but in the browser, the global scope is the global object. ( we will talk about this later )

//> Some Example

function food() {
  const veg = "potato";

  function nonveg() {
    const nonveg = "chicken";
    console.log("Inside the function: ", veg);
  }
  console.log(nonveg);
  nonveg();
}
food();

//> Some Example

if (true) {
  const a = "Hello";
  if (true) {
    const b = "World";
    console.log(a);
  }
  // console.log(b); //! this gives us the error because the b is not defined in this scope.
}

// =========================== some tempting example =========================== //

//> Example 1

function add(val, val2) {
  return val + val2;
}

console.log(add(2, 3)); //note: we can call the function before the function declaration because of the hoisting.

//> Example 2

console.log(sub(2, 3)); //note: we can't call the function before the function declaration because of the hoisting.

const sub = function (val, val2) {
  return val - val2;
}
