/* sort() = method used to sort lements of an array in place.
            Sorts elements as strings in lexicographic order, not alphabetical
            Lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

fruits.sort();

numbers.sort((a, b) => b - a)

console.log(fruits);
console.log(numbers);


/// You can also sort objects by a given property

const people = [ {name: "Bob", age: 12, gpa: 3.1},  
                 {name: "Ivan", age: 15, gpa: 1.9},
                 {name: "Iman", age: 14, gpa: 4.3}, 
                 {name: "Gabby", age: 16, gpa: 2.7}
]
people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people);


