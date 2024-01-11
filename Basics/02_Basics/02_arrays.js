let r6 = ["Kali", "Thatcher", "Sledge", "Mute", "Smoke", "Castle"];
let apex = ["Wraith", "Lifeline", "Bangalore", "Gibraltar", "Bloodhound", "Pathfinder"];

r6.push(apex);
console.log(r6); //note: this create an array inside an array
console.log(r6[6][1]);

let legends_operator = r6.concat(apex); //note: this create a new array that combines the two arrays 
console.log(legends_operator);

let operator_legends = [...r6, ...apex]; //note: this create a new array that combines the two arrays (more modern & preferred way)
console.log(operator_legends)

// note: we used spread operator to combine the two arrays, <*> in simple words : imagine a array is the glass when we drop the glass it breaks into pieces, just like that the spread operator breaks the array into pieces and then combines them into a new array

let messed_array = [1,2,3, [4,5], 6, [7,[8,9]]];
console.log(messed_array.flat(Infinity)); //note: this will flatten the array into a single array


let R6_operator = "Kali";
console.log(Array.isArray(R6_operator)); //note: this will check if the variable is an array or not
console.log(Array.from(R6_operator)); //note: this will convert the string into an array

let r6_operator_details = {
    name: "Kali",
    age: 34,
    country: "India",
    quote: "Acceptance of mediocrity is the first step toward failure",
    city: "Amereli"
}

console.log(Array.of(r6_operator_details));