// JavaScript Array toSorted() Method
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sorted = fruits.toSorted()
console.log(fruits);
console.log(sorted);

