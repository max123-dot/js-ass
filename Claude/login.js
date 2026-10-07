//Two variables, username and password, hardcode "correct" values like "admin" and "1234" to check against. The login only succeeds if both conditions are true simultaneously - that's what && means. Test it three ways:
//both are correct
//only username is correct
//both wrong
//Watch how && short-circuits- if the first condition is false, it doesn't even bother checking the second

let username = "admin";
let password = 12345;

if (username === "admin" && password == 1234) {
    console.log("Login Successful");
    
}
else{
    console.log("Invalid username or password");
    
}