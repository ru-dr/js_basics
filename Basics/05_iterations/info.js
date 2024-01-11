// Explain Higher Order Functions

// Note: Here you can see the syntax of a basic function

function functionName(arg1, arg2) {}

// Note: Here you can see the syntax of a higher order function
//> since higher order functions are callback functions, they dont have a name

(arg1, arg2) => {}; //> this is a callback function (higher order function)

//> lets see a real example

const fruits = ["apple", "banana", "orange", "mango"];

//> here we are using the forEach method which is a higher order function

fruits.forEach((element, index) => {
  console.log(`${element} is at index ${index}`);
});

//> in the above example we are passing a callback function to the forEach method which takes 3 arguments (element, index, array) and logs them to the console

