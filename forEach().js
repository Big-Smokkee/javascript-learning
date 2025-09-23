//forEach()  --> very important
// let names = ["Kamal", "uddin", "Jafory", "binte", "alal"];
// names.forEach(disp);
// function disp(value) {
//     // return value;
//     console.log(value);
// }


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
function getSum(value) {
    sum += value;
}
array.forEach(getSum);
console.log(`The sum is: ${sum}`);