function greet(name = "friend") {
  return `Hello, ${name}!`;
}

console.log(greet("Max"));   // Hello, Max!
console.log(greet());        // Hello, friend!


// Function that takes a name and returns a greeting message