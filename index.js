// while-looop

// let user = " ";
// user = user.trim();
// while (user === "" || user ===null)
// {
//     // console.log("You didn't enter anything");
//     // break;
//     user = prompt("Enter your name");
// }
// console.log(`hello: ${user}`);

// do while loop

// let user;
// while (user === "" || user === null){
//     user = prompt("Enter your name");
// }

// console.log(`Hello ${user}`);

let loggedIn = false;
let username;
let pass;

while (!loggedIn) {
    username = prompt("Enter your user name");
    pass = prompt("Enter your password");

    if (username === "myUsername" && pass === "myPassword")
    {
        loggedIn = true;
        console.log(`You are logged in`);
    }
    else
    {
        console.log(`Invalid creadential`);
    }
}