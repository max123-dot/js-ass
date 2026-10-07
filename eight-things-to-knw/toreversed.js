// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const reversed = fruits.toReversed()
console.log(fruits);
console.log(reversed);