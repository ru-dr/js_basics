// Play with the things you've learned so far here.
// Open the console to see the output of your code.

// Path: sandbox/Play.js

// req vars ( currently ) : val, index , count ( maybe ), storage array

function countDups(arr) {
  let storageArr = new Array(arr.length).fill(0);
  let finder = 1;
  for (let index = 0; index < arr.length; index++) {
    let currVal = arr[index];
    storageArr[currVal]++;
  }
  if(storageArr.includes()){

  }
}

console.log(countDups([1, 2, 2, 2]));
