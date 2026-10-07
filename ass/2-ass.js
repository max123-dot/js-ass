// Instructions: Write a JavaScript program that manages the scores of 5 students in a class using array's of object please. You are given the following array: [45, 78, 92, 56, 34, 88, 67, 73, 49, 95]; ten students varibles of their name, age, class, score, attendance. Display each student name and score in the array. Determine Pass or Fail Use if/else to determine whether each score is a pass or fail. The rules are: 50 and above → "Pass" Below 50 → "Fail" Create a new array containing only the students who passed Create another array containing scores that are 80 or above. Calculate and display the total of all the scores. Create another function called: The function should calculate and return the average score. Requirements Your solution must: Use an array. Use a function. Use if/else. Use at least two different array methods. Display the results using console.log().


const rawScore = [45, 78, 92, 56, 34, 88, 67, 73, 49, 95];

const students = [
    { name: "Alice", age: 14, Class: "Jss3", score: rawScore[0], attendance: "95%" },
    { name: "Bob", age: 16, Class: "Sss1", score: rawScore[1], attendance: "90%" },
    { name: "Zach", age: 15, Class: "Jss2", score: rawScore[2], attendance: "80%" },
    { name: "Ivan", age: 13, Class: "Jss1", score: rawScore[3], attendance: "85%" },
    { name: "Liam", age: 17, Class: "Sss3", score: rawScore[4], attendance: "75%" },
    { name: "Kelvin", age: 16, Class: "Sss2", score: rawScore[5], attendance: "70%" },
    { name: "Collins", age: 14, Class: "Jss2", score: rawScore[6], attendance: "92%" },
    { name: "Emma", age: 15, Class: "Sss1", score: rawScore[7], attendance: "87%" },
    { name: "Charlie", age: 15, Class: "Sss2", score: rawScore[8], attendance: "78%" },
    { name: "Iman", age: 18, Class: "Sss3", score: rawScore[9], attendance: "95%" }
];

console.log('Results');
students.forEach(student =>{
    let status ;
    if (student.score >= 50) {
        status = "Passed"
    }
    else{
        status = "Failed"
    }
    console.log(`Student: ${student.name} | Score: ${student.score} | Status: ${status}\n`);
    
})


const passed = students.filter(student => student.score >= 50);
console.log(`These are the students that passed:`);
console.log(passed);


const above80 = students.filter(student => student.score >= 80);
console.log(`These are the students that scored aboved 80:`);
console.log(above80);

const total = students.reduce((sum, student) => sum + student.score, 0);
console.log(`The total of all scores: ${total}`);

function getAverage(students){
    return total / students.length
}
console.log(`The average of the scores are: ${getAverage(students)}`);




