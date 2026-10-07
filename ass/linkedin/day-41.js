function largestNumber(numbers) {
  let largest = numbers[0];

  for (let number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

console.log(largestNumber([4, 8, 2, 15, 6])); // 15

// Function that takes an array of numbers and returns the largest number