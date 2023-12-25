let currDate = new Date();
console.log(currDate);

console.log(typeof currDate);

console.log(currDate.toString());
console.log(currDate.toLocaleString());
console.log(currDate.toDateString());
console.log(currDate.toTimeString());
console.log(currDate.toISOString());
console.log(currDate.toUTCString());

let newDate = new Date(2021, 0, 1);
console.log(newDate.toString());

newDate = new Date("07-26-2004");
console.log(newDate.toString());

let otherDate = Date.now(); //note: returns milliseconds since 1 Jan 1970
console.log(otherDate);

console.log(Math.floor(newDate.getTime() / 1000));

console.log(
  currDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
);
