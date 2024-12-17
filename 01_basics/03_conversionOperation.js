// "use strict"

// let score = "33abc"
let score = null

console.log(typeof score) // just a syntax
console.log(typeof(score)) // used method to find type of 

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); // output = NaN (not a number) so be carefull when you use numbers in javascript

// values if converted in number
// "33" => 33
// "33abc" => NaN
// true => 1 / flase => 0

let isLoggedIn = null
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false
// "vineet" => trues
// need something to make it true otherwise it is false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

console.log("---------------------------------------------------------- OPERATIONS ----------------------------------------------------------------");
// ---------------------------------------------------- OPERATIONS --------------------------------------------------------

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //power
console.log(2/3);  //division
console.log(2%3);  // modulous => remainder

let str1 = "hello"
let str2 = "vineet"

let str3 = str1 + str2
console.log(str3);

//please dont do this 
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((2 + 3) * 3 % 4);

console.log(+true);
// console.log(true+); // not valid
console.log(+""); // false 

let num1, mum2, num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++                    // tricky question about prefix and postfix // read on js mdn
console.log(gameCounter);
