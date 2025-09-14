// Random Number Genarator
//my way
let randomNum1 = Math.ceil(Math.random()* 6);
console.log(randomNum1);
// bro code way
let randomNum2 = Math.floor(Math.random()* 6) + 1;
console.log(randomNum2);

// random number between 51 and 100
let rand3 = Math.ceil(Math.random() * 50) + 50;
console.log(rand3);

// Bro code way
const min = 50;
const max = 100;

let randBro = Math.floor(Math.random() * (max - min)) + min;
console.log(randBro);