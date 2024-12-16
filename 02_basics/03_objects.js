// singleton => jab bhi koi constructor jab iss se bnate h to ek hi object bnta h // unique and only one 
// objects can be declared in two ways : 1.literals 2. constructor

// if an object is made through constructor it is allways singleton.
// if an object is made through literals, it can have many instances. No Singleton.
// no diffence between the two .only singleton

// Object Construtor 
// Object.create

// Object Literals

const mySym1 = Symbol("number")

const jsUser = {                        // object created // key-Value pair // these curly braces are object
    name: "Vineet",
    "Full name": "Snow Black",          // u cant access this with '.' method, only bracket method can be used 
    age: 21,
    [mySym1]: 432,
    location: "Chitkara University",
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Tuesday"]
} 

console.log(jsUser);

// two ways to access the object 
 console.log(jsUser.name);  
 console.log(jsUser["name"]);        // keys behind-the-scene are kept as strings that why the ""
//  console.log(jsUser."Full name"); // cant be accessed with '.' method

console.log(jsUser[mySym1]);        // defining symbol in a object => [name of th Symbol]: value 
                                    // before adding in obeject symbol must be defined outside the object 
                                    // output => [Symbol(number)]: 432

// changing values in an object 

jsUser.name = "rohit"
// console.log(jsUser.name);

// Freezing Object
jsUser.age = 30
// Object.freeze(jsUser)  // after freeze u cant change the object 
jsUser.age = 32
// console.log(jsUser);

// lets try adding Functions in object

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`); // this keyword gave access to all the properties to the user
}

jsUser.greeting()                  // output => hello js user (no undefined was here in output,dont know why??)
console.log(jsUser.greetingtwo()); // output => hello js user, rohit , undefined
console.log(jsUser.greeting);      // output => [Function (anonymous)] => function returned back
console.log(jsUser.greeting());    // output => hello js user , undefined

// ---------------------------------------------- NOTE ----------------------------------------------
// USE DOT ACCESS METHOD MOST OF THE TIME, IF SOMETHING IS NOT ACCESSIBLE BY DOT METHOD ONLY THEN USE [] METHOD.