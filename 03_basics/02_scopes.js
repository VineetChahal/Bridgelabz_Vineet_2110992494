let a = 100 
// const b = 20
// var c = 300  // THIS IS GOLBAL SCOPE. VALUES from global scope can enter block scope 
             // but values from block scope must never escape from it 

{} // curly barces are called scopes in every language. not with objects as they are used to declare them,
   // but with any other function they are the scopes of that function called block scope

//example

// THIS IS BLOCK SCOPE, values from this scope must never excape 
if (true) {
    let a = 10 
    const b = 20
    // var c = 30 
    c = 30
    console.log("Inner Scope:" + a); // output => 10
}

// console.log(a); // no ouput because a is defined in 'if' block scope
// console.log(b); // no ouput because a is defined in 'if' block scope
// console.log("Global Scope:" + c);     // OUTPUT => 30 
                    // there is an output because of declaring variable by using ' VAR '. T
                    // HIS IS THE REASON VAR MUST NEVER BE USED TO DECLARE THE VARIABLE.

console.log("Global Scope:" + a) // Output => 100


// Nested Scope 

function one() {
    const firstname = "Snow"

    function two() {
        const lastname = "Black"
        console.log(firstname);
    }
    // console.log(lastname); // error coz lastname is not in scope 

    two() // called function two 
}
one() // called function one

if (true) {
    const fname = "Snow"
    if (fname == "Snow") {
        const lname = "Black"
        console.log(fname + lname);
    }
    // console.log(lname) // error, not in scope 
}
// console.log(fname); // error, not in scope 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * both the methods below are the decalaratio methods for functions
 * 
 * the first method i.e. 'addone' is the basic/traditional method 
 * while the addtwo method is called "HOISTING"
 * here second method is stored in a variable
 * 
 * YOU CAN CALL THE TRADITION METHOD BEFORE/AFTER THE FUNCTION
 * BUT U CANT DO THAT WITH THE HOISTING METHOD I.E. ADDTWO
 */


console.log(addone(5)) //output => 6
function addone(num) {
    return num + 1
}
console.log(addone(5)) //output => 6

// below is also called expression
// console.log(addtwo(5)) // output => Cannot access 'addtwo' before initialization
const addtwo = function(num) {
    return num + 2
}
console.log(addtwo(5)) // output => 7
