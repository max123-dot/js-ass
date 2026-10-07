// Function expression

const hello = function(){
    console.log("Hello");
    
} 
hello()

// arrow function

/*A concise way to writ function expressions good for simple functions that you use only once */ 

const Hello = (name) => {console.log(`Hello ${name}`)
                         console.log(`You are old`)};
                        

Hello(`Bruv`)



const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

let myList = fruits.join(" | ");
console.log(myList);
