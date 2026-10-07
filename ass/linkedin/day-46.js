function sumAll(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sumAll(1, 2, 3, 4)); // 10

// Arrow function that takes any number of arguments and returns their sum