const rl = require("readline-sync");

console.log("Hello, Welcome to networkchuck Coffee");

const name = rl.question("What is your Name?\n");

console.log(`Hello ${name}, thank you so much for coming in today!!`);

const type = rl.question("What would you like us to serve you today?\n" + "Latte\n" + "Coffee\n" + "Tea\n" );

const amount = rl.question(`How many cups of ${type} do you want right now?\n`);

console.log(`We will get your ${amount} cups of ${type}'s in a moment`);

const price = rl.question(`How much are you willing to pay for ${amount} cups of ${type}?\n`);

console.log(`Thank you for your payment of ${price} for ${amount} cups of ${type}. Enjoy your drink!`);

const feedback = rl.question("How was your experience with us today?\n");

console.log(`Thank you for your feedback: "${feedback}". We appreciate your input and hope to see you again soon!`);


