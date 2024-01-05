const data = {
  name: "John",
  salary: 1000,
  bonus: 200,
  totalSalary: function () {
    return this.salary + this.bonus; //note: we use this keyword to access the object properties ( current context )
  },
};

console.log(data.totalSalary());
data.bonus = 300; //update the bonus
console.log(data.totalSalary()); //> this is the advantage of using this keyword ( we don't need to update the function, it will automatically update the value )

console.log(this); //> since we are in node it will give us an empty object, but in the browser, it will give us the window object.

//> Example 3

function thisInfo() {
  const uname = "John";
  console.log(this.john); //> this will return undefined ( because we can't use this keyword outside of the object ), this is the same in arrow function
}

thisInfo();

// > now let's see the arrow function

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); //> 5

// > with implicit return

const addTwo = (a, b) => a + b;

console.log(addTwo(2, 3)); //> 5

// > with implicit return for object

const userData = (name, age) => ({ name: name, age: age });

console.log(userData("John", 30)); //> { name: 'John', age: 30 }