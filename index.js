// Method chaining = calling one method after another in one continues line of code...



///Amar mone hoitese jinish ta c++ er continue er moto

let username = window.prompt("Enter your User Name");
// console.log(username);
/*              No method chaining
//1ta solution
// username = username.toUpperCase();
// username = username.replace('f', "F");
// username = username.replace('f', "F");
// console.log(username);

//2nd
// username = username.replaceAll('f', 'F');
// console.log(username);


//3rd (bro Code)
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
// console.log(firstLetter);
// console.log(extraChars);
username = firstLetter + extraChars;
console.log(username);
// username = username.replaceAll(username.in, 'F');

*/

///Here comes method chaining

// boom boom combos
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);


///Daruuun
