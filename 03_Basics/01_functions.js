//> one way to define a function
function add(a, b) {
  console.log("Addition");
  console.log(a + b);
}

add(22, 3);

//> another way to define a function
function addOther(a, b) {
  let sum = a + b;
  return sum;
}

const addSum = addOther(2, 3);
console.log("add", addSum);

//> Example :

function LoginUser(username){
    if(username === undefined || username === null){
        return "Please provide a username"
    }
    else{
        return `Welcome ${username}`
    }
}

const validate = LoginUser();
console.log(validate)

//> Example : ( using rest operator )

function totalMoney(...money){
    let sum = 0;
    for(let i = 0; i < money.length; i++){
        sum += money[i];
    }
    return sum;
}

const total = totalMoney(1,2,3,4,5,6,7,8,9,10);
console.log(total)

//> Example : ( on Object , way 1)

let userData = {
    name: "John",
    age: 25,
    address: "USA"
}

function getUserData(user){
    return `Name: ${user.name} , Age: ${user.age} , Address: ${user.address}`;
}

const user = getUserData(userData);
console.log(user)

//> Example : ( on Object , way 2)

function readGameData(game){
    return `Name: ${game.name} , Genre: ${game.genre} , Price: ${game.price}`;
}

const getGameData = readGameData({
    name: "RainBow Six Siege",
    genre: "FPS",
    price: 20
})

console.log(getGameData)

//> Example : ( on Array )

function getArrayData(arr){
    return `Name: ${arr[0]} , Age: ${arr[1]} , Address: ${arr[2]}`;
}

const arrData = getArrayData(["John", 25, "USA"]);
console.log(arrData)