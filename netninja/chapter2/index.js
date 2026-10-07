// Control Flow

// Loops

// they are used to loop through a piece of code over and over

//for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
    
// }
// console.log('Loop finished');


// let n = prompt("Your favourite number?");
// n = Number(n)
// for (let i = 0; ; n++) {
    
    
// }


// const names = ['max', 'shaun', 'luigi', 'dora']

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
    
// }


// While Loops

// let i = 0;
// while (i < 5) {
//     console.log('in loop:', i);
//     i++
// }

// const names = ['max', 'shaun', 'luigi', 'dora']
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++
// }

// Do While loops
// let i = 3

// do {
//     console.log('val of i is:', i);
//     i++;
// } while (i < 5);




// If Statements
// const age = 25;
// if(age > 20){
//     console.log('You are over 20 years old');
    
// }


// const ninjas = ['shaun', 'max', 'pete', 'kevin']
// if (ninjas.length > 3) {
//     console.log("That's alot of ninjas");
    
// }

// const password = 'p@1234';

// if (password.length >= 12 && password.includes('@')) {
//     console.log("That password is mighty strong");
    
// }

// else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log("That password is Strong enough!!!");
    
// }else{
//     console.log("That password is not Strong enough");
    
// }

// Break ad continue

const scores = [50, 25, 0, 30, 100, 20, 10]
for(let i = 0; i < scores.length; i++){

    if (scores[i]===0) {
        continue;
    }

    console.log('your score:', scores[i])
    if (scores[i] === 100) {
        console.log("Congrats you hav reached the top score");
        break;
    }
    
} 

const grade = 'A';
switch (grade) {
    case 'A':
    console.log('You got an A!');
    break;
    case 'B':
    console.log('You got an B!');
    break;
    case 'C':
    console.log('You got an C!');
    break;
    case 'D':
    console.log('You got an D!');
    break;
    case 'E':
    console.log('You ot an E!');
    break;
    default:
    console.log('not a valid grade');
    break;

}


