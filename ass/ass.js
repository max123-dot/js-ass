// Assignment


let studentName = "Kelvin";
 age = 11;
 score = 65;
 Classes = "Ss3";
 Attendance = true;

//  console.log(Score);
//  console.log(studentName);
//  console.log(Class);
//  console.log(Attendance);
 
//  conditions
if (age < 18) {
    console.log('You are too young and not eligible');
}
else if(age >= 18 && age <= 21){
    console.log('Congrats you are eligible');
}
else{
    console.log('You have exceeded the age range for this offer \n');
}

// Score
if (score >= 50 && score <= 59) {
    console.log('You passed the course');   
}
else if(score >= 60 && score <=69){
    console.log('You tried atleast you got a B'); 
}
else if (score >= 70 && score <= 89) {
    console.log('You did very Good. Weldone  ');
}
else if(score >= 90 && score <= 100){
    console.log('You used Ai');   
}
else{
    console.log('You failed this course and you must repeat this class');  
}

// Attendance

if (Attendance === true) {
   console.log("Congratulations");
}
else{
    console.log("10 marks deducted");
}

// Class Conditions

if (Classes === "Ss1") {
    console.log("Not eligible for Prefectship");
}
else if (Classes === "Ss2") {
    console.log("Aspirant for Prefectship");
}
else if (Classes === "Ss3"){ 
    console.log("You're a Prefect"); 
}
else{
    console.log("You don't have a class");
}
