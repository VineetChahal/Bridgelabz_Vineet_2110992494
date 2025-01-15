/** 
 * Array in TypeScript
 * - An array is a data structure that stores a collection of elements of the same type.
 * - Arrays in TypeScript are used to store multiple values in a single variable.
 * - Arrays can store elements of any data type, including primitive types, objects, and functions.
 * - Arrays in TypeScript are zero-based, meaning the index of the first element is 0.
 * - Arrays can be created using array literals or the Array constructor.
 * - Arrays provide methods for adding, removing, and manipulating elements.
 * - Arrays can be iterated using loops, array methods, and array destructuring.
 * - Arrays can be multidimensional, allowing for the creation of matrices and other complex data structures.
 */

// Example of an array in TypeScript

// Array literal syntax
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Array constructor syntax
const colors: Array<string> = new Array("Red", "Green", "Blue");
console.log(colors); // Output: ["Red", "Green", "Blue"]

// Accessing elements of an array
console.log(numbers[0]); // Output: 1
console.log(colors[1]); // Output: Green

// Modifying elements of an array
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements to an array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

// Removing elements from an array
numbers.pop();
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Iterating over an array using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output:
// 1
// 2
// 10
// 4
// 5

// Iterating over an array using the forEach method
numbers.forEach((number) => {
    console.log(number);
});
// Output:
// 1
// 2
// 10
// 4
// 5

// Using array methods to manipulate arrays
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 20, 8, 10]

const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers); // Output: [10]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 22

// Using array destructuring to extract values
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [10, 4, 5]

// Multidimensional arrays
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Accessing elements of a multidimensional array
console.log(matrix[0][1]); // Output: 2
console.log(matrix[1][2]); // Output: 6

// Iterating over a multidimensional array
matrix.forEach((row) => {
    row.forEach((element) => {
        console.log(element);
    });
});
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Array methods in TypeScript
// - Arrays in TypeScript provide a variety of methods for manipulating and iterating over arrays.
// - These methods include map, filter, reduce, forEach, and others.
// - Array methods can be used to transform, filter, and reduce arrays to produce desired results.
// - Array methods provide a functional programming style for working with arrays in TypeScript.
// - Array methods can be chained together to perform complex operations on arrays.
// - Array methods are powerful tools for working with arrays in a concise and expressive way.

// Example of using array methods in TypeScript

// Define an array of numbers
const numbersArray: number[] = [1, 2, 3, 4, 5];

// Map method: Double each number in the array
const doubledArray = numbersArray.map((number) => number * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// Filter method: Filter out odd numbers from the array
const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce method: Calculate the sum of all numbers in the array
const sumArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray); // Output: 15

// forEach method: Print each number in the array
numbersArray.forEach((number) => {
    console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// Chaining array methods
const result = numbersArray
    .map((number) => number * 2)
    .filter((number) => number > 5)
    .reduce((acc, curr) => acc + curr, 0);
console.log(result); // Output: 24

// Summary
// - Arrays in TypeScript are used to store collections of elements of the same type.
// - Arrays can be created using array literals or the Array constructor.
// - Arrays provide methods for adding, removing, and manipulating elements.
// - Arrays can be iterated using loops, array methods, and array destructuring.
// - Array methods such as map, filter, reduce, and forEach can be used to transform and manipulate arrays.
// - Array methods provide a functional programming style for working with arrays in TypeScript.
// - Array methods can be chained together to perform complex operations on arrays.




