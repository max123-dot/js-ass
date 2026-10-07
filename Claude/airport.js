/* age and isStudent (boolean). Discount applies if either condition is true - doesn't need both.
Test:
1. old but not student
2. student but not old
3. neither both

This is where people confuse && and || logically even when they know the syntax - make sure your test cases actually distinguish them*/

let age = 19;
let isStudent = false;
let teen = age <= 17;
let young = age >= 18 && age <= 30;
let old = age >= 30;

if (young && !isStudent) {
    console.log("Um you are eligible for the Young offer")
}
else if (young && isStudent) {
    console.log("Um you are eligible for the Young and Student offer")
}
else if (teen && !isStudent) {
    console.log("Um you are eligible for the Teens offer")
}
else if (teen && isStudent) {
    console.log("Um you are eligible for the Teen and Student offer")
}
else if (old && !isStudent) {
    console.log("Um you are eligible for the Old offer")
}
else if (old && isStudent) {
    console.log("Um you are eligible for the Old and Student offer")
}
else{
    console.log("You are not eligible for any of the offers");
}