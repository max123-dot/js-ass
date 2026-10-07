// The .flat array method creates a new array with all the sub-array elements concatenated into it

const nestedArray = [1, 2, [3, 4]];

// Flatten the array by one level
const flatArray = nestedArray.flat();

console.log(flatArray); // Returns: [1, 2, 3, 4]


