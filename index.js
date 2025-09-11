//   const = "a variable that can't be changed"

// const PI = 3.14159;
// let radius;
// let circumferences;

// //what is I changed pi variable value
// // pi = 9458490;

// // so the best practice is using const pi.. After that we can't make any changes to it

// // PI = 30.14159;
// radius = window.prompt("enter the radius os a circle: ");
// radius = Number(radius);
// circumferences = 2 * PI * radius;

// console.log(circumferences);



// user website
const PI = 3.14159;

document.getElementById("submit-button").onclick = function () {
    let radius = document.getElementById("radius-box").value;
    radius = Number(radius);
    let conference = 2 * PI *radius;
    document.getElementById("ans").textContent = `The answer is : ${conference}.`;
    // console.log(conference);
}