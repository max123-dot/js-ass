const phone = {
    brand: "Tecno",
    storage: 64,
}
phone.color = "Red"
phone.storage = 128
console.log(phone);
console.log(phone.price);
phone.price = 90000
console.log(phone.price);

// const dog = {
//     name: "Rex",
//     bark: function () {
//         console.log("Woof!");
//     },
// };
// dog.bark()















function Car(name, model, year) {
    this.name = name,
    this.model = model,
    this.year = year
}

Car.prototype.drive = function(){
    console.log(`Your drive is a ${this.name} ${this.model}`);
}

const car1 = new Car ("Mercedes", "G63", 2025);
const car2 = new Car ("Lamborghini", "Alvetado", 2026);
const car3 = new Car ("Ferrari", "Sf90", 2023);

console.log(car1.name);
console.log(car1.model);
console.log(car1.year);

console.log(car2.name);
console.log(car2.model);
console.log(car2.year);

console.log(car3.name);
console.log(car3.model);
console.log(car3.year);

console.log(car1);
console.log(car2);
console.log(car3);


