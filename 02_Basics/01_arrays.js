let arr = [1, 2, 3, 4, 5];
console.log(arr);

let R6 = ["Kali", "Thatcher", "Sledge", "Mute", "Smoke", "Castle"];
console.log(R6[0]);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

R6.shift();
console.log(R6);

R6.unshift("Doc");
console.log(R6);

console.log(R6.indexOf("Sledge"));

console.log(R6.slice(1, 3));

console.log(R6.splice(1, 3, "Thermite", "Montagne", "Twitch"));

console.log(R6);