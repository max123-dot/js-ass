// ES6 - An external file that contains reusable code that can be imported into other Javascript files. Write reusable code for many different apps. Can contain variables, classes, functions ... ad more Introduced as part of the EcmaScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(PI);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);


