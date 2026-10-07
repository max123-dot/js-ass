let ninjas = ['Shaun', 'Ryu', 'Chun-li'];
let age = [20, 25, 30]
ninjas.push('Max')
age.push(17)
length = ninjas.length
console.log(ninjas.length)
console.log(ninjas.indexOf('Ryu'));
let joined = ninjas.join(" | ")
let leader = "Max"
console.log(`    The Ninja Squad has ${length}.
    The squad leader is ${leader}.
    The members are: ${joined} `);

let locations = ['Tokyo', 'Osaka', 'Kyoto'];
let concat = ninjas.concat(locations)
console.log(concat);
