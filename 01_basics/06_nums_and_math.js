const score = 100
console.log(score); // output => 100

const balance = new Number(200.9876543234)
console.log(balance); // output => [number: 200] // reason is because of cast through object 

console.log(balance.toString().length);
console.log(balance.toFixed(4)); // must use in e-commerce // give decimal value upto 4

const otherNumber = 23.487
console.log(otherNumber.toPrecision(3)) // JS mdn // important // round-off the value keeping in mind the first 3 digits

const hundered = 100000000000
console.log(hundered.toLocaleString('en-IN')); // it will add ',' in 0's according to indian standards // default is US


//----------------------------------------------- MATHS --------------------------------------------------

console.log(Math);
console.log(Math.abs(-4));    // absolute value // convert -ve values to positive
console.log(Math.round(4.6)); // round-off decimal values
console.log(Math.ceil(4.1));  // round-off the value to its upper limit
console.log(Math.floor(4.9)); // round-off the value to its lower limit
console.log(Math.min(2,4,3,8,19)); // give min-value present
console.log(Math.max(2,4,3,8,19)); // give max-value present 

console.log(Math.random()); // give random value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

