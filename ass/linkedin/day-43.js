function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5)); // 120

// Function that takes a number and returns its factorial