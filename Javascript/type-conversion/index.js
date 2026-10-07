// type conersion = change the datatype of a value to another (strings, numbers, booleans)

let age = window.prompt("How old are you?")

age = Number(age)
age += 1

if (age >= 18 && age <= 21) {
    document.getElementById("myh1").textContent = "You are below the age requirements";
}
else if (age >= 22 && age <= 100) {
    document.getElementById("myh1").textContent = "You are Eligible for our offer";
}
else{
    document.getElementById("myh1").textContent = "You are not eligible for this offer"
}



document.getElementById("myp").textContent = `From your input you are ${age}`

// let x = "Max";
// let y = "Max";
// let z = "Max";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x)
// console.log(y, typeof y);
// console.log(z, typeof z);

