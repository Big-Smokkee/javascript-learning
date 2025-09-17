// string slicing = Creating a substring from a portion of another string

// syntex:   String.slice(start_index, end_index + 1)

// note: the ending index is exclusive.. If we need to slice a substring from the middle to the last index we dont need to write the ending index on .slice parameters.....
const fullName = "Fardin Faraz";

let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7);
console.log(firstName);
console.log(lastName);

// for the first character we can use .slice(0, 1);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);

//if we use any negative index we will beginb at the end....... .slice(-1);
// for the last character
let lastChar = fullName.slice(-1);
console.log(lastChar);



// eshob guna gunir jhamela baad dite

let firstNameUltimate = fullName.slice(0, fullName.indexOf(" "));
console.log(firstNameUltimate);
let lastNameUltimate = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastNameUltimate);


const email = "fardinfaraz@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);