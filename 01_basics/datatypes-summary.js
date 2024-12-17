// Primitive => call by value hote h 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scaoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 65254755577987482987743n // n to make it big int 

// Refrence(non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] 
console.log(heros);
 
// object are WRITTEN in curly bracktes as key-value pairs
let myObj = {
 name: "vineet",
 age: "21"
}
console.log(myObj);

// function
let myFunction = function(){
    console.log("hello world");
}
console.log(myFunction);


// JS daynamicaly typed language



//--------------------------------------------------- MEMORY --------------------------------------------------

// Stack (primitive) / HEAP (NON-PRIMITIVE)

let myYoutubeName = "Snowblack"

let anotherName = myYoutubeName
anotherName = "snow"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    name : "snow",
    age: 23,
    email: "abc@gmail.com",
    upi: "user@ybl",

}

let userTwo = userOne

userTwo.email = "def@gmail.com"

console.log(userTwo);