"use strict" //read all JS code as newer version (not needed nowdays)

// alert("hello") // works in browser (create a pop-up)

console.log(3+3*8)
console.log("vineet") // maintain readability

// for documentation = mdn 
// more documentatio = tc39.es/ecma262  (organization to write some standards to aintain good codebase)


// datatypes

let nameOfP = "vineet"
let ageOfP = 18
let isLoggedIn = true

// numbers => 2 to the power 23
// bigint
// Stiring => ""
// boolean => true/false
// null => standAlone value // search mdn
// undefined => 
// symbol => uniqueness
// object

let age = 21;
let name = "vineet";
let isSignedin = false;
let phoneNumber = null;
let state;

console.table([age, name, isSignedin, phoneNumber, state]);
console.table([
  typeof age,
  typeof name,
  typeof isSignedin,
  typeof phoneNumber,
  typeof state,
]);

console.log(typeof undefined); // output => undefined
console.log(typeof null); // output => object

