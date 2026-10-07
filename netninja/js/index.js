// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers.length);
// console.log(numbers);

const key = "role";
const person = {
  name: "Taylor",
  role: "Developer"
};
console.log(person[key]);

function findWordWithA(words) {
    let A = []
    for(let i = 0; i < words.length; i++){
        for (let h = 0; h < words[i].length; h++) {
            if (words[i][j] === 's') {
                A.push(words[i])
            }
        }
        return words
    }
}

console.log(findWordWithA);

const students = [
    { name: "Aisha", age: 16, class: "10-A", score: 92, attendance: 96 },
    { name: "Bilal", age: 17, class: "11-B", score: 78, attendance: 88 },
    { name: "Chen", age: 16, class: "10-A", score: 85, attendance: 91 },
    { name: "Divya", age: 17, class: "11-B", score: 34, attendance: 70 },
    { name: "Ethan", age: 18, class: "12-C", score: 27, attendance: 65 }
];

function filterByScore(list, compare, value) {
    return list.filter(student => compare(student.score, value));
}

const topStudents = filterByScore(students, (score, limit) => score > limit, 80);
const strugglingStudents = filterByScore(students, (score, limit) => score < limit, 40);

console.log("Score above 80:", topStudents);
console.log("Score below 40:", strugglingStudents);