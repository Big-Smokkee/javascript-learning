// function = a section of reusable code. Declare code once, use it whenever you want. Call tge function to execute that code

// function happyBirthday(userName, age) {
//     console.log("Happu birthday");
//     console.log(`Happu birthday dear ${userName}`);
//     console.log("Happu birthday to you");
//     console.log(`You are ${age} years old`)
// }
// let age = 21;
// happyBirthday(21);
// happyBirthday("Faraz", 21);

function add(x, y)
{
    let res = x + y;
    return res;
}

let res = add(20, 5);
console.log(res);

function isValid(email)
{
    return email.includes("@") ? true : false;
}
let res1 = isValid("BroadcastChannel.com");
console.log(res1);