// string methods = allow you to work with text (string)

let userName = 'BroCode  ';
console.log(userName.charAt(3)); //it prints the character at index 3;
let ind = userName.indexOf("f"); //it will return the index number of first occurance of f..na paile -1
console.log(`Index of C is ${ind}`);
console.log(`The length of userName is: ${userName.length}`);//Length returns the length of a string.

//trim function will trim all of the white spaces
console.log(`Before ${userName} length = ${userName.length}`);
userName = userName.trim();
console.log(`After ${userName} length = ${userName.length}`);

// .trim() can't tri, spaces between a string
let newUserName = "Fardin   Faraz";
newUserName = newUserName.trim();
console.log(`${newUserName} length = ${newUserName.length}`);

// .toUpperCase() this thing uppercases all of the characters
newUserName = newUserName.toUpperCase();
console.log(newUserName);

// .toLowerCase() this thing lowercases all of the characters
newUserName = newUserName.toLowerCase();
console.log(newUserName);

// .repeat(how many times)
console.log(userName.repeat(2));

// .startsWith(character) --> This will return a boolean :it is used to determine if a string is starting with a given character
let str = "abcdefgh";
let flag = str.startsWith("a");
if (flag)
{
    console.log(`Yes`);
}
else
{
    console.log(`No`);
}
//boolean means
console.log(flag);

// .endsWith(character) --> This will return a boolean :it is used to determine if a string is ending with a given character
let str2 = "abcdefgh";
let flag2 = str.endsWith("h");
if (flag2)
{
    console.log(`Yes`);
}
else
{
    console.log(`No`);
}
// .includes(character) it returns if the charater incluedes in the string or not
let fullName = "Fardin Faraz";
let flag3 = fullName.includes(".");
if (flag3) {
    console.log("your name contains a or many space");
}
else
{
    console.log("It doesn't contain any spaces");
}

// .replaceAll(character for replacing, character to be replaced)
let phone = "01912-916342";
phone = phone.replaceAll("-", "//");
console.log(phone);


// .padStart(number,"desired string") it is a way of telling that how many characters should the string be....If the number is less than the length of the string, it simply outputs the string....But if the number is greater than the length of string, it maintains the number by using white spaces or by the desired character... Pad
phone = phone.padStart(15, '0');
console.log(phone);

// .padEnd(number,"desired string") ager tar moton aee vai...khakli oi ta shamne pad kore...eta last aee pad kore
phone = phone.padEnd(20, '0');
console.log(phone);
