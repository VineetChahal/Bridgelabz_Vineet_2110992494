const name = "Vineet"
const age = 21

// console.log("Hi, I am " + name + " and I am " + age + " years old.");  // old way, do not use

console.log(`Hi, I am ${name} and I am ${age} years old`); // string interpulation // follow backticks syntax, much more imp

const gameName = new String("SnowBlack-bye") // try in console 
console.log(gameName);
console.log(gameName.__proto__); // all prototypes on string
 
// methods on string 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-4, 8)
console.log(anotherString);

const newString1 = "                  vineet                     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://snow.com/snow black"    // browser make ' '(space) into %20
console.log(url.replace(' ','_'));
console.log(url.includes("snow"));
console.log(gameName.split('-')); // give an array seperated base on the input // here '-'.