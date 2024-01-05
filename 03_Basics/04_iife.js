//> Immediately Invoked Function Expression (IIFE)
// note : we create iife to avoid the global scope pollution, and to execute the function immediately

//> Example 1

(function iifeINFO() {
  // its a named iife function
  console.log("this is a iife function");
})(); //<--- we have to use ; to end iife function otherwise the other function below will not work

//> Example 2 ( using arrow function with parameter )

((name) => {
  // this is not a named iife function
  console.log(`Hello ${name}`);
})("John");
