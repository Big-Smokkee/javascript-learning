// IF statements ==
// If a condition is true, execute some code
// if Notification, do something else
//1st example
// let age = 115;
// if (age >= 18) {
//     console.log("You are old enough to enter this site");
// }
// else
// {
//     console.log("You must be 18+ to enter this site");
// }
//2nd example
// let time = 9;
// if (time < 12)
// {
//     console.log("Good morning!");
// }
// else {
//     console.log("Good afternoon!");
    
// }
//3rd eample
// let isStudent = true;
// if (isStudent) {
//     console.log("You are a student!");
// }
// else
//     {
//     console.log("You aren't a student!");
// }

//Nested if else
///Order of the statements matter a lot when using else if
let age = -15;
let hasLicense = true;

if (age >= 16) {
    console.log("You are old enough to drive");
    if (hasLicense) {
        console.log("You have your license");
    }
    else
        {
        console.log("You dont have your license");
    }
}
else if (age < 0)
{
    console.log("Are you even a human");
}
else
{
    console.log("You must be 16+ to have a license");
}