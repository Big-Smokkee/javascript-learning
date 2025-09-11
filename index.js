// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox


//Easy way = window prompt
// let username;
// username = window.prompt(`what's you username?`);
// document.getElementById('a').textContent = `You typed ${username}`

// Professional way
let username;
document.getElementById("submit").onclick = function () {
    username = document.getElementById("name").value;
    // console.log(username);
    document.getElementById("myH1").textContent = ` at the website ${username}`;
}