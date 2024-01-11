//>< comparision operators ><\\
// ==, ===, !=, !==, >, <, >=, <=

const userAge = 18;
const userName = "Bob";

if (userAge == 18) {
  console.log("you are allowed to enter");
} else if (userAge < 18) {
  console.log("you are not allowed to enter");
}

if (userName === "Bob") console.log(`Hello ${userName}!`); //> using implicit scope

// multiple conditions ( &&, || )

if (userAge >= 18 && userName === "Bob") {
  console.log("you are allowed to enter");
} else if (userAge < 18 || userName !== "Bob") {
  console.log("you are not allowed to enter");
}

//> ternary operator

const isAllowed = userAge >= 18 ? true : false;
console.log(isAllowed);

