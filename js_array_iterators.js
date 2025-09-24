// Array.forEach ()
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(heda, shona, arr, rkisu)
// {
//     console.log(heda);
//     // console.log(shona);
//     console.log(arr);
//     // console.log(rkisu);

//     console.log("---");
// }

// numbers.forEach(myFunction);


//map(ekta function er naam) -->shei function er parameter(value, index, array)
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array)
// {
//     return value * 2;
// }

// let newNumbers = numbers.map(myFunction);
// console.log(newNumbers);

//filter(ekta function er naam) -->shei function er parameter(value, index, array)
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value)
// {
//     return value>10;
// }

// let newNumbers = numbers.filter(myFunction);
// console.log(newNumbers);

//Array.reduce(ekta function er naam, (optional--> initial value)) -->shei function er parameter(total, value, index, array)
// const numbers = [45, 4, 9, 16, 25];
// let i = 0;
// function myFunction(total, value, index, array)
// {
//     // i++;
//     // console.log(i);
//     console.log(total);
//     console.log("-----");
//     return total + value;
// }

// let newNumbers = numbers.reduce(myFunction, 10);
// console.log(newNumbers);

// Array.every()
// const numbers = [45, 4, 9, 16, 25];
// let i = 0;
// function myFunction(value, index, array)
// {
//     return value > 3;
// }
// let allowOver18 = numbers.every(myFunction);
// console.log(allowOver18);

// Array.some()
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array)
// {
//     return value > 45;
// }
// let allowOver18 = numbers.some(myFunction);
// console.log(allowOver18);



// Array.find()
const numbers = [4, 9, 45,16, 25];
function myFunction(value, index, array)
{
    return value > 10;
}
let newNumber = numbers.find(myFunction);
let index = numbers.findIndex(myFunction);
console.log(newNumber);
console.log(index);

