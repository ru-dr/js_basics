//const rainbowSixSiege = {}; //> object literal

const rainbowSix = new Object(); //> singleton object, Also we can use Object.create() to create a singleton object

rainbowSix.name = "Rainbow Six";
rainbowSix.year = 2015;
rainbowSix.publisher = "Ubisoft";
rainbowSix.details = {
  price: 20,
  genre: "FPS",
  platform: {
    pc: true,
    xbox: true,
    playstation: true,
  },
};

console.log(rainbowSix);
console.log(rainbowSix.details.platform);

//> combine two objects
const vegitables = { potato: 10, tomato: 20, onion: 30 };
const fruits = { apple: 40, orange: 50, banana: 60 };

const shoppingCart = Object.assign({}, vegitables, fruits); //> Object.assign(), {} is the target object and the rest are the source objects
console.log(shoppingCart);

const grocery = { ...vegitables, ...fruits }; //> spread operator ( more modern & preferred way )
console.log(grocery);

//> get the keys and values from an object
console.log(Object.keys(grocery));
console.log(Object.values(grocery));

//> check if the object has a particular key
console.log(grocery.hasOwnProperty("potato"));