const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 35},
    {name: "pineapple", color: "yellow", calories: 50},
    {name: "orange", color: "orange", calories: 75},
    {name: "coconut", color: "white", calories: 85}
]
console.log(fruits[4].calories);

// fruits.push({name: "Grapes", color: "blue", calories: 69})
// fruits.splice(0,2)
console.log(fruits);

//-------- Map() ---------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


// ------- Filter() -------

const yellowFruits = fruits.filter(fruit => fruit.calories === "yellow");
const highCalories = fruits.filter(fruit => fruit.calories >= 70)
const lowCalories = fruits.filter(fruit => fruit.calories <= 70)

console.log(yellowFruits);
console.log(highCalories);
console.log(lowCalories);
 

// ------- Reduce() -------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max)
console.log(maxFruit);





const minFruit = fruit.reduce((min, fruit) => fruit.calories < min.calories ?
fruit : min)
console.log(minFruit);
