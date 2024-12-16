// array

const myArr = [1, 2, 3, 4, 7, 'true', "snow"]
// console.log(myArr); 

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)
// console.log(myArr2);

// array methods

// myArr.push(6) // add value to the last 
// myArr.pop()  // remove 1st value from the last

// myArr.unshift(9) // add valuse to start of the array
// myArr.shift() // remove value from the start of the array

// console.log(myArr.includes(9)) // output => true or false
// console.log(myArr.indexOf("snow")) // output =>  index

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr)

// slice, splice

console.log("A: " + myArr);         // output => A: 1,2,3,4,7,true,snow

console.log("using slice");         // output => using slice
const myn1 = myArr.slice(1, 3)      
console.log(myn1);                  // output => [ 2, 3 ]
console.log("B: " + myArr);         // output => B: 1,2,3,4,7,true,snow

console.log("using splice");        // output => using splice   // able to change the array
const myn2 = myArr.splice(1, 3)     
console.log(myn2);                  // output => [ 2, 3, 4 ]
console.log("C: " + myArr);         // output => C: 1,7,true,snow   