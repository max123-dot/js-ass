// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// let score = 75;
// console.log(score);


// strings
console.log("Hello World");

let email = "maximillanegbuniwe@gmail.com"
console.log(email);


// string concatenation
let firstName = "Brandon"
let lastName = "Sanderson"

let fullName = firstName + " " + lastName
// console.log(fullName);


// getting characters
// console.log(fullName[0, 3]);


// string length
// console.log(fullName.length);


// string methods

// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);
// console.log(fullName);


//String Methods

//lastIndexof it basically helps u find d index of the letter or number u wanna find. for examle the below statement it goes ad fids the idex of th last 'n' as i this case 
// let result = email.lastIndexOf("n");

//Slice it is used to get values from a range like maybe I need to jxt get Maximillan and not the whole email I used the slice
// let name = email.slice(2,10)
// console.log(name);

// Substring it is similar to slice but jxt that while the two parameters in the slice method are the start ad end for the substr it is the start and the length to stop at
// let sub = email.substr(4,17)
// console.log(sub);

// Replace it is used to replace the first used case of that letter and replacs it with a second parameter  
// let reps = email.replace("n", 't') 
// console.log(reps);

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators + - / * ** %

// console.log(10/2);

// let result = pi * radius ** 2

// Order of operation

// let result = 5*(10-3)**2

// console.log(result);

// let likes = 10 
// console.log(likes);
// likes += 10
// console.log(likes);
// likes -= 10
// console.log(likes);
// likes *= 10
// console.log(likes);
// likes /= 10
// console.log(likes);

// let blogLikes = `The Blog has ${likes} likes`
// console.log(blogLikes);

let title = "Ai can't kill us all";
const author = "Max";
let views = 1000
const likes = 500

let blog = `The Blog called ${title} written by ${author} has reached ${views} views and has ${likes} likes`
console.log(blog);

// Creating Html Templates

let html =  `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes}likes</span>
`;
console.log(html);


// Arrays 
let ninjas = ['Shaun', 'ryu', 'chun-li']
// console.log(ninjas);

// ninjas[1] = 'Max'

// console.log(ninjas[1]);
// console.log(ninjas);

// let age = [20, 25, 30, 35]
// console.log(ages[2]);

// let random = [ninjas[0], 'crystal', age[2], age[0]]
// console.log(random);


console.log(ninjas.length);

// Join is used to join the elements in a array together ad ca also used a character to separate them
let joined = ninjas.join(',',);
console.log(joined);

// indexOf is used to search and find the index of character
let index =  ninjas.indexOf('chun-li')
console.log(index);

// concat is used to join two arrays together
// let result = ninjas.concat(age)
// console.log(result);

// push it is used to add to a last character in an array
let push = ninjas.push("Maxi")
console.log(ninjas);

// pop it is used to remove the last character in an array
let pop = ninjas.pop()
console.log(ninjas);


// Null and Undefined

let ages;
console.log(ages, ages+=3, `The age is ${ages}`);

// Null is an intentional lack of value 
let noot = null;
console.log(noot, noot+=3, `The age is ${noot}`);

// Booleans
let emails = "maximillanegbuniwe@gmail.com";
let check = emails.includes('max')
console.log(check);
 

let names = ['Shaun', 'Chun-li', 'Samantha']
let nameCheck = names.includes('Chun-li')
console.log(nameCheck);

// Comparison Operators
// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 20);
// console.log(age <= 25);

let name2 = "Max"

console.log(name2 > 'Shaun');
console.log(name2 > 'Caleb');

// Type Conversion
let score = '100';

score = Number(score)
console.log(score + 1);

