function countVowels(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if ("aeiou".includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world")); // 3


// Arrow function that counts the number of vowels in a string