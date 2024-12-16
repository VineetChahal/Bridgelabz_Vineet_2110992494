function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
}
// sayMyName()

/**
 * function is declared with "function"
 * sayMyName is the functions name
 * then ()
 * then {} // is khte h scope mtlb function ki definition
 * 
 * now to print
 * sayMyName // just this is called refrence 
 * if u add () in front of the refrence it means execute or execution
 */


function addTwoNumbers(number1, number2){
    // let ans = number1 + number2
    // return ans
    return number1 +number2
    console.log("hi");              // wont work as after return nothing works
    // console.log(number1+number2);
}
// addTwoNumbers() // output => coz u didnt provide any arguments, in this case number1 and number2
const result = addTwoNumbers(2,5) // output => 7 
// console.log("Result: " + result)

/**
 * when u make a function in this case line 23 here number1 and number2 are called parameters 
 * but when u call the function, line 27 u pass arguments 
 */

function loginUserMsg(username){
    if(username === undefined){
        console.log("Please enter a valide username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg())