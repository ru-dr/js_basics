// Note : the console.log statements are only works in the browser, and will not work in the terminal ( press F12 to open the console in the browser )

// > lets take a look at the ways we can access the DOM

// > 1. getElementById
// > 2. getElementsByClassName
// > 3. getElementsByTagName
// > 4. querySelector

// > now lets see how we can read the values from the DOM

// > 1. innerHTML ( returns the HTML inside the element )
// > 2. innerText ( returns the text inside the element that is visible )
// > 3. textContent ( returns the text inside the element even if it is hidden )

//> ok enough of theory lets see some code

const heading = document.getElementById("heading").innerHTML;
console.log(heading);

const para = document.getElementsByClassName("para");
console.log(para[0].innerText); // we used [0] because getElementsByClassName returns an array of elements 

const list = document.getElementsByTagName("li");
console.log(list[0].textContent);
