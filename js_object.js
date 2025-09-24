///Created a object
const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "White",
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
    process: function () {
        this.start();
        console.log("After that");
        this.drive();
    }
};

///Accessing object property
console.log(car.weight);
// array er moto ooo kaaj kore
console.log(car["name"]);
car.start();
console.log(car.drive());//eta undefined thorugh korbe karon ami console log korsi ek bar;

// calling both
console.log("----------")
car.process();
console.log("----------")



///This keyword
const person = {
    firstName: "Fardin",
    lastName: 'Faraz',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
let myName = person.fullName();
console.log(`Amar naam hoilo ${myName}`);
