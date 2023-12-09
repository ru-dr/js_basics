"use strict"; // enable strict mode, which treats the JS code as newer version

//alert(3 + 2 + 1); // we are using nodejs, so alert is not available here. its only available in browser

console.log(3 +
     2 +
      1); // this is not a good practice, but it works

let uname = "John";
let age = 25;
let isLoggedIn = false;

// > basic data types < //
// < Premitive Data Types > //
// number => 2
// bigint => 1234567890123456789012345678901234567890n
// string => "hello"
// boolean => true/false
// null => standalone value
// undefined => value is not yet assigned
// symbol => unique identifier

// < Object Data Types > //
// object => {name: "John", age: 25}

console.log(typeof uname);