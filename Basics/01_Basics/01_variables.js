const accountId = 1;

let accountEmail = "johndoe@email.me";

var accountPassword = "johnDoe_1234";

accountCity = "New York";

let accountStatus; // undefined

// accountId = 2; not allowed
accountEmail = "janedoe@email.me";
accountPassword = "janeDoe_1234";
accountCity = "Los Angeles";

/* prefer to avoid the use of var
issues: block scope , function scope , hoisting , global scope
due to its global scope , which can lead to value overwriting without notice
*/

console.log(accountId, accountEmail, accountPassword, accountCity, accountStatus);
console.table({ accountId, accountEmail, accountPassword, accountCity, accountStatus });
