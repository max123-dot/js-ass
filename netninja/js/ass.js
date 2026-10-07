/*
Create a Student Management System using constructor functions and prototypes.
You must create a Student constructor that accepts:

* name
* age
* course
* score

Your system must allow you to:

1. Create at least 3 students.
2. Add a prototype method introduce() that displays the student's information.
3. Add a prototype method getResult() that returns Pass if the score is 50 or above and Fail otherwise.
4. Add a prototype method updateScore(newScore) that changes the student's score.
5. Add a prototype method getGrade() that returns:

   * `A` → 80–100
   * `B` → 70–79
   * `C` → 60–69
   * `D` → 50–59
   * `F` → below 50
6. Find the student with the highest score.
7. Find the student with the lowest score.
8. Calculate the **average score*of all students.
9. Prove that introduce(), getResult(), and getGrade() are stored on Student.prototype and not directly inside each student object.
10. Use getPrototypeOf() to prove that the students share the same prototype.
*/ 

function Student(name, age, course, score) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.score = score;
}

const student1 = new Student("Max", 18, "Software Engineering", 90);
const student2 = new Student("Kelvin", 19, "Cybersecurity", 90);
const student3 = new Student("Keisha", 16, "Software Engineering", 97);
const student4 = new Student("Daniel", 17, "Hacking", 99)
const student5 = new Student("Jessica", 20, "Data Scientist", 100)

Student.prototype.introduce = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Course: ${this.course}`);
    console.log(`Score: ${this.score}`);
}

console.log(student1.introduce());


Student.prototype.getResult = function () {
    if (this.score >= 50){
        return "Pass!!";
    }
    else{
        return "Fail!!";
        
    }
}
console.log(student1.getResult());
 
Student.prototype.updateScore = function(newScore){
    this.score = newScore;
}

Student.prototype.getGrade = function (){
    if (this.score >= 80 && this.score <= 100) {
        return "A"
    }
    else if (this.score <= 79 && this.score >= 70) {
        return "B"
    }
    else if(this.score <= 69 && this.score >= 60){
        return "C"
    }
    else if(this.score <= 59 && this.score >= 50){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(student1.getGrade());
const students =[student1, student2, student3, student4, student5]

let highestStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].score > highestStudent.score) {
        highestStudent = students[i];
    }
}

console.log("Highest score:", highestStudent.name, highestStudent.score);

student5.updateScore(65)
console.log(student5);

let lowestStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowestStudent.score) {
        lowestStudent = students[i];
    }
}

console.log("Lowest score:", lowestStudent.name, lowestStudent.score);

let averageScore = 0;
for (let i = 0; i < students.length; i++) {
    averageScore += students[i].score;
}

averageScore /= students.length;

console.log("Average score:", averageScore);

console.log(student1.hasOwnProperty('introduce')); // false it shows false because the introduce method is not a property of the student1 object itself, but rather a property of its prototype (Student.prototype). This means that student1 can access the introduce method through its prototype chain, but it does not have its own copy of the method.
console.log(student1.hasOwnProperty('getResult')); // false it shows false because the getResult method is not a property of the student1 object itself, but rather a property of its prototype (Student.prototype). This means that student1 can access the getResult method through its prototype chain, but it does not have its own copy of the method.
console.log(student1.hasOwnProperty('getGrade')); // false it shows false because the getGrade method is not a property of the student1 object itself, but rather a property of its prototype (Student.prototype). This means that student1 can access the getGrade method through its prototype chain, but it does not have its own copy of the method.

console.log(Object.getPrototypeOf(student1) === Student.prototype); // true
console.log(Object.getPrototypeOf(student2) === Student.prototype); // true
console.log(Object.getPrototypeOf(student3) === Student.prototype); // true
console.log(Object.getPrototypeOf(student4) === Student.prototype); // true
console.log(Object.getPrototypeOf(student5) === Student.prototype); // true
