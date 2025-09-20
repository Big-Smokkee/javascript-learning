// Spread Operator = ... allows an iterable such as an array or string to be expended into seperate elements(unpacks the elements)

// let array = [1, 2, 3, 4, 5];
// let maximum = Math.max(...array);
// let minimum = Math.min(...array);
// // console.log(array);
// console.log(maximum);
// console.log(minimum);
// console.log(...array);


// let username = "Faraz";
// let letters = [...username];
// console.log(letters);

// // join method
// join method simply pack the unpack array to string into variable by anything that we give into the parameter

// letters = letters.join("-");
// console.log(letters);

let fruits = ["apple", "orange", "banana", "mango"];
let vegetables = ["potatoes", "carrots", "Lemons"];

//etar maddhome combine kora jaay array +++ append oo kora jay
let newFruits = [...fruits, ...vegetables, "eggs", "milk"];
// let newFruits = fruits + vegetables;
console.log(newFruits);