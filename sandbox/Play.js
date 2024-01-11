// Play with the things you've learned so far here.
// Open the console to see the output of your code.

// Path: sandbox/Play.js
let arr = [1, 3, 2, 4, 5, 2, 3, 1, 4, 6];

function dupes(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let val = arr[index];
    if (!newArr.includes(val)) {
      newArr.push(val);
    } else if (newArr.includes(val)) newArr[val] + 1;
  }
  console.log(newArr);
}

dupes(arr);

arr[2]++;
