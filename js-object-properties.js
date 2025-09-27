const person = {
    name: "Faraz",
    age: 23,
};
person.country = "Bangladesh";

// console.log(person.name);
// console.log(person.country);

// console.log(person);

//Object in for ... loop
// let txt = "";
// for (let x in person) {
//     txt = txt + person[x];
//     txt += " ";
// }
// console.log(txt);

/*          nested object
myObj = {
    name: "faraz", age: 25,
    cars: {
        car1: "Ford",
        car2: "GTR",
        car3: "Mastang"
    }
};
// console.log(myObj);
for (let k in myObj.cars) {
    console.log(myObj.cars[k]);
}
*/

/*          Nested obejct with array 
const myObj = {
    name: "faraz", age: 25,
    cars: [
        {name: "Ford", models: ["Fiesta", "Mustang", "Focus"] },{name: "BMW", models: ["320", "X3", "X5"]} ,{name: "Fiat", models: ["500", "Panda"]}
    ]
};
// for (let i in myObj.cars)
// {
//     console.log(myObj.cars[i].models);
// }

let x = "";
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}
console.log(x);
*/