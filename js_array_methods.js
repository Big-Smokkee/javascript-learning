//toString();
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits;
console.log(`before convertion to String: ${fruits}`);
console.log(a);
// a = fruits.toString();
console.log(`after convertion to String: ${a}`);
console.log(a);


//join("char")
a = a.join("-");
console.log(a);

//pop - push
a = fruits.pop();
console.log(a); 
a = fruits.push("heda");// eta shudhu matro length ta return korse
console.log(a); 
console.log(fruits); 


//Shift
a = fruits.shift();
console.log(a); 
console.log(fruits); 


//unshift()
a = fruits.unshift("dhouu");
console.log(a); 
console.log(fruits); 


//Deleting element
// a = delete fruits[fruits.length-1];
// console.log(a);
// console.log(fruits);

//splice(from where, how many, values)
a = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(a); 
console.log(fruits); 
//with removing
a = fruits.splice(2, 2);
console.log(a); 
console.log(fruits); 
// removing first element
a = fruits.splice(0, 1);
console.log(a); 
console.log(fruits); 

//concat();
let fz = ['k', 'k'];
let az = ['k','i'];
d = fz.concat(az);
console.log(d);


//slice(from index, till index)
console.log("slice");
let dada = fruits.slice(1, 4);
console.log(dada);
console.log(fruits);

let abba = fruits.slice(1);
console.log(abba);


// sort method
console.log("Sort");
fruits.sort();
console.log(fruits);

//reversing array
fruits.reverse();
console.log(fruits);

let nums = [100, 2, 5, 400, 5];
nums.sort();
console.log(nums);