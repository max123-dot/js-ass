// functions declarations
// function greet() {
//     console.log("Hello There");
    
// }
// greet()

// function expression
// const speak = function () {
//     console.log("Good Day!!");
    
// };
// speak()

// Hoisting works wit

// Js only hoists function declarations but it dosn't hoist function expression

const speak = function (name, time) {
    console.log(`Good ${time} ${name}`);
    
}
speak("Max", "morning")

// returning values
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area
    
}
const areas = calcArea(5)
console.log(`The area: ${areas}`);

// const calcVol = function(radius) {
//     let vol = areas * radius;
//     return vol
// }
// const vols = calcVol(5);
// console.log(`The volume: ${vols}`);


// Arrow Functions

// it turning a regular function to an arrow function you remove the function keyword then place the arrow btw the parameter and the block of code for that function, if the parameter is a single value you can remove the brackets the parameters are in. Also in the block of code you can remove the return keyword giving u smth like this

const calcAreas = radius => 3.14 * radius **2;
console.log(calcAreas(5));


const calcVol = (radius) => {
    let vol = areas * radius;
    return vol
}
const vols = calcVol(5);
console.log(`The volume: ${vols}`);

const bill= function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}
const totalBill = bill([10, 15, 20], 0.5);
console.log(totalBill);

const arwbill = (products, tax) => {
    let Total = 0;
    for(let i = 0; i < products.length; i++){
        Total += products[i] + products[i] * tax
    }
    return Total
}
const abill = arwbill([10,15,20], 0.2)
console.log(`The is your total: $${abill}.00`);

const name = "Shaun"
// Functions
console.log("------- Functions -------");
 
    const greet = () => 'Hello!!';
    let greetOne = greet();
    console.log(greetOne);
    
// Mathods
console.log("-------- Methods --------");

name.toUpperCase()


