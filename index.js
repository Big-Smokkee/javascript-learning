//Type conversion - change datatype of value


// In this way everything user inputs save as string. So age+=1 gets concatenated. for solving this we can use line 9 method..Number(variable)
// let age = window.prompt("How old are you?");
// age++;
// age += 1;
// console.log(age);

// let age = window.prompt("What is your age?");
// console.log( typeof age);
// age = Number(age);
// console.log( typeof age);
// age += 1;
// console.log(age);

let x = `faraz`;
let y = 'faraz';
let z = 'faraz';
x = Number(x);

y = String(y);

z = Boolean(x);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
