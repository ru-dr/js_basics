// while

let userAge = 18;

while (userAge < 21) {
  console.log("You are not allowed to drink alcohol");
  userAge++; // conditon to stop the loop ( it will stop when userAge is 21 )
}

console.log("\n");

// do while

let price = 1000;

do {
  console.log(`Price: ${price}`);
  price -= 100;
} while (price >= 500);

// note: do while will execute the code block at least once even if the condition is false


// note : there are some other types of loops like for of, for each, for in, etc.