
//How to accept user input

// 1. Easy Way = window.prompt
// 2. Professional Way = HTML textbox


        // Easy Route

// let username;

// username = window.prompt("What's your username");

// console.log(`Hello ` + username);

        //////


        // Professional Route check the html 

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(username);
    
    document.getElementById("myh1").textContent = `Welcome ${username}`
}