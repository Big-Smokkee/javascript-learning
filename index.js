// array: a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"]; 

fruits[3] = "cocunut";
fruits.push("cocu");
fruits.pop();//eda last value delete koira dey
console.log(`The length of the array is: ${fruits.length}`);

fruits.unshift("mango");// it inserts mango at the front of the array
fruits.shift(); // it remove elements from the beginning;
console.log(fruits);
console.log(fruits[2]); 

console.log(fruits.length);

let index = fruits.indexOf("Cocu");
console.log(index); // na paile -1


// for displaying the array we can use for loop
// console.log("Showing elements by for loop and index too");
// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(`Index of ${fruits[i]} is : ${fruits.indexOf(fruits[i])}`);
// }

// console.log("Shortcut for loop");

// for (let fruit of fruits) {
//     console.log(fruit);
// }

console.log("Before sorting");
for (let i = 0; i < fruits.length; i++)
{
    console.log(`Index of ${fruits[i]} is : ${fruits.indexOf(fruits[i])}`);
}


//array sorting
// fruits.sort();// syntex:  array_name.sort();
// console.log(fruits);
console.log("After sorting");
for (let i = 0; i < fruits.length; i++)
{
    console.log(`Index of ${fruits[i]} is : ${fruits.indexOf(fruits[i])}`);
}

fruits.reverse();// eta reverse koira dibe
console.log(fruits);