const fruits = ['apple', 'banana', 'orange'];
const message = "Hello World";

// 1. Testing a real array
console.log(Array.isArray(fruits));   // Returns: true

// 2. Testing a regular string
console.log(Array.isArray(message));  // Returns: false
















// function welcomeUsers(users) {
//   // 1. Check if the input is an array
//   if (Array.isArray(users)) {
//     // Loop through the array and greet everyone
//     users.forEach(user => {
//       console.log(`Welcome back, ${user}!`);
//     });
//   } 
//   // 2. Fallback for a single string input
//   else if (typeof users === "string") {
//     console.log(`Welcome back, ${users}!`);
//   } 
//   // 3. Handle invalid inputs
//   else {
//     console.log("Invalid input: Please provide a string or an array.");
//   }
// }

// // --- Testing the function ---

// // Case A: Passing an Array
// welcomeUsers(["Alice", "Bob", "Charlie"]);
// // Output:
// // Welcome back, Alice!
// // Welcome back, Bob!
// // Welcome back, Charlie!

// // Case B: Passing a single String
// welcomeUsers("Diana");
// // Output: 
// // Welcome back, Diana!
