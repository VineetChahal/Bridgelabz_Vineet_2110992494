// Immediately Invoked Function Expressions (IIFE)

// This is IIFE
(function chai() {
    console.log(`DB Connected`);
})(); // output => DB Connected
// the IIFE above is named IIFE coz it has a name "chai"

// the IIFE below are simple IIFE
( () => {
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected ${name}`);
})("snowblack");

/**
  ()();
  first parenthesis is where we will be vreating the function 
  2nd is execution call

  IIFE=>
    global scope k polution se dikkat hoti h kai baar 
    so global scope k variable h to uske pollution ko htane k liye use krte h IIFE
  
 */
