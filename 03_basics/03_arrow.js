const user = {
    username : "snowblack",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the code`);
        console.log(this);
        // output of "this" => | |
        //                      V
        /**
           first : the welcome msg , then "this" keyword print all the  present context i.e. snowblack
         * snowblack, welcome to the code
            {
            username: 'snowblack',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }

           second : the welcome msg , then "this" keyword print all the  present context i.e. sam
         * sam, welcome to the code
            {
            username: 'sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }
            
            // context simply means values i.e. kis k bare m baat ho rhi h 

         */
    }
}

user.welcomeMessage() // output => snowblack, welcome to the code
user.username = "sam"
user.welcomeMessage() // output => sam, welcome to the code
console.log(this);    // output => {} current context is empty coz we are in node environment here this keyword refer to empty object

/**
 * broser k andr jab  console.log(this); krte h to context aata h window object jo sabse jayada global thats why it captuers all the events
 */

function chai() {
    const name = "snowblack"
    console.log(this.name) // output => undefined // u cant use this in functions, only in objects
    // console.log(this); // here are all sort of things that can be accessed by using this thats wy so many outputs in this function 
}
chai()

const chai2 = function (){
    const name = "snowblack" // output => undefined // u cant use this in functions, only in objects
    console.log(this.name);
}
chai2()

//+++++++++++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++++++++

const chai3 = () => {
    const name = "snowblack"
    console.log(this.name); // output => undefined 
    console.log(this); // output => {}
}
chai3()

/**
 *  SYNTAX 
 * () => {}   ,THIS IS AN ARROW Function
 * OR U CAN HOLD IT IN A VARIABLE 
 * const chai3 = () => {}
 */

const addnumbers0 = (number1, number2) => {  // If u use curly braces, then u have to use return keyword
    return number1 + number2
    }
console.log(addnumbers0(3, 4));

const addnumbers1 = (number1, number2) =>  number1 + number2  // also know as "IMPLICIT RETURN"
console.log(addnumbers1(3, 4));

const addnumbers2 = (number1, number2) => (number1 + number2) 
console.log(addnumbers2(3, 4));

const addnumbers3 = (number1, number2) => ({username: "snowblack"}) // if u want to return object u have to use the parenthesis
console.log(addnumbers3(3, 4));