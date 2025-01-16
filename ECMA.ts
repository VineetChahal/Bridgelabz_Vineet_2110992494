/*-----------------------------------------------ES6-----------------------------------------------*/

// 1. Arrow Functions
// - Arrow functions are a more concise way to write function expressions in JavaScript.
// - Arrow functions have a more compact syntax compared to traditional function expressions.
// - Arrow functions do not have their own this, arguments, super, or new.target keywords.
// - Arrow functions are best suited for non-method functions and do not work well as object methods.
// - Arrow functions are not hoisted like traditional function declarations.
// - Arrow functions are anonymous and cannot be named.
// - Arrow functions are useful for writing short, single-line functions.
// - Arrow functions can be used as callbacks, event handlers, and function arguments.
// - Arrow functions can be used to create closures and lexical scoping.
// - Arrow functions are not suitable for defining object methods or constructors.

// Traditional function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function expression
const sum = (a, b) => a + b;

// Traditional function expression with multiple lines
const subtract = function(a, b) {
    return a - b;
};

// Arrow function expression with multiple lines
const difference = (a, b) => {
    return a - b;
};

// Arrow function with no arguments
const greet = () => console.log('Hello');

// Arrow function with a single argument
const square = x => x * x;


// 2. Template Literals
/**
 * - Template literals are a new way to create strings in JavaScript.
 * - Template literals allow for embedded expressions and multi-line strings.
 * - Template literals are enclosed in backticks (`) instead of single quotes (') or double quotes (").
 * - Template literals can contain placeholders that are replaced with values at runtime.
 * - Template literals support string interpolation and expression evaluation.
 * - Template literals can span multiple lines without the need for escape characters.
 */

// Traditional string concatenation
const name12 = 'Alice';
const message = 'Hello, ' + name12 + '!';
console.log(message); // Output: Hello, Alice!

// Template literal with string interpolation
const greeting = `Hello, ${name12}!`;
console.log(greeting); // Output: Hello, Alice!

// Template literal with multi-line string
const multiline = `This is a
multi-line
string.`;
console.log(multiline);
// Output:
// This is a
// multi-line
// string.


// 3. Destructuring Assignment
/**
 * - Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.
 * - Destructuring assignment uses syntax that looks similar to array or object literals.
 * - Destructuring assignment can be used with arrays, objects, and function parameters.
 * - Destructuring assignment can be used to assign default values to variables.
 * - Destructuring assignment can be used to swap variable values.
 * - Destructuring assignment can be used to extract values from nested arrays and objects.
 * - Destructuring assignment can be used to clone arrays and objects.
 */

// Destructuring assignment with arrays
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Destructuring assignment with objects
const person = { name1: 'Alice', age: 30, city1: 'Unknown' };
const { name1, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30

// Destructuring assignment with function parameters
const printPerson = ({ name1, age }) => {
    console.log(`Name: ${name1}, Age: ${age}`);
};
printPerson(person);
// Output: Name: Alice, Age: 30

// Destructuring assignment with default values
const { city1 = 'Unknown' } = person;
console.log(city1); // Output: Unknown

// Destructuring assignment to swap variable values
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // Output: 2
console.log(b); // Output: 1

// Destructuring assignment with nested arrays
const nested: [number, [number, number], number] = [1, [2, 3], 4];
const [x, [y, z], w] = nested;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
console.log(w); // Output: 4


// 4. Spread Operator
/**
 * - The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
 * - The spread operator can be used to copy arrays, concatenate arrays, and combine objects.
 * - The spread operator can be used to pass an array as arguments to a function.
 * - The spread operator can be used to create shallow copies of arrays and objects.
 * - The spread operator can be used to merge arrays and objects into a new array or object.
 * - The spread operator can be used to convert iterable objects to arrays.
 */

// Copying an array
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]

// Concatenating arrays
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];
const combined = [...first1, ...second1];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Combining objects
const defaults = { theme: 'dark', mode: 'light' };
const user = { name: 'Alice', theme: 'light' };
const settings = { ...defaults, ...user};
console.log(settings);

// Passing an array as arguments
const numbers1 = [1, 2, 3];
const sum1 = (...numbers: number[]) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1(...numbers1)); // Output: 6

// Creating shallow copies
const person1 = { name: 'Alice', age: 30 };
const cloned = { ...person1 };
console.log(cloned); // Output: { name: 'Alice', age: 30 }

// Merging arrays
const first2 = [1, 2, 3];
const second2 = [4, 5, 6];
const merged = [...first2, ...second2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]


// 5. Rest Parameter
/**
 * - The rest parameter (...) allows a function to accept an indefinite number of arguments as an array.
 * - The rest parameter is used to represent an indefinite number of arguments as an array.
 * - The rest parameter must be the last parameter in a function definition.
 * - The rest parameter can be used to collect remaining arguments into an array.
 * - The rest parameter can be used to handle variable-length argument lists.
 * - The rest parameter can be used to replace the arguments object in function definitions.
 * - The rest parameter can be used to create functions with a variable number of arguments.
 */

// Function with rest parameter
const sum2 = (...numbers: number[]) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2(1, 2, 3)); // Output: 6

// Function with rest parameter and other parameters
const multiply = (multiplier: number, ...numbers: number[]) => numbers.map(n => n * multiplier);
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// Function with rest parameter and destructuring
const log = (message: string, ...args: number[]) => {
    console.log(message, ...args);
};
log('Numbers:', 1, 2, 3);
// Output: Numbers: 1 2 3


// 6. Default Parameters
/**
 * - Default parameters allow function parameters to have default values if no argument is passed.
 * - Default parameters are specified in the function definition using the assignment operator (=).
 * - Default parameters can be used to provide default values for function parameters.
 * - Default parameters can be used to define optional parameters with default values.
 * - Default parameters can be used to simplify function definitions and calls.
 * - Default parameters can be used in conjunction with rest parameters.
 * - Default parameters are evaluated at function call time, not function definition time.
 * - Default parameters can be expressions or function calls that return a value.
 */

// Function with default parameters
const greet2 = (name: string = 'World') => `Hello, ${name}!`;
console.log(greet2()); // Output: Hello, World!
console.log(greet2('Alice')); // Output: Hello, Alice!

// Function with default parameters and expressions
const add2 = (a: number, b: number = 0) => a + b;
console.log(add2(1)); // Output: 1
console.log(add2(1, 2)); // Output: 3

// Function with default parameters and function calls
const log2 = (message: string = getDefaultMessage()) => console.log(message);
function getDefaultMessage() {
    return 'Hello, World!';
}
log2(); // Output: Hello, World!


// 7. Object Literal Shorthand
/**
 * - Object literal shorthand allows you to define object properties using a shorter syntax.
 * - Object literal shorthand allows you to omit the property name if it matches the variable name.
 * - Object literal shorthand is a more concise way to define object literals.
 * - Object literal shorthand is useful for creating objects with properties that have the same name as the variable.
 * - Object literal shorthand can be used to create objects with computed property names.
 * - Object literal shorthand can be used to create objects with method properties.
 */

// Object literal shorthand
const name2 = 'Alice';
const age2 = 30;
const person2 = { name2, age2 };
console.log(person2); // Output: { name: 'Alice', age: 30 }


// 8. Classes
/**
 * - Classes in JavaScript are a way to create objects using a blueprint or template.
 * - Classes define the structure and behavior of objects, allowing for code reuse and modularity.
 * - Classes encapsulate data and behavior into a single unit, providing a way to model real-world entities.
 * - Classes in JavaScript are similar to classes in other object-oriented programming languages like Java and C#.
 * - Classes in JavaScript support object-oriented concepts such as inheritance, encapsulation, and polymorphism.
 * - Classes can have properties, methods, constructors, access modifiers, and other class members.
 * - Classes provide a way to create objects with predefined properties and methods.
 * - Classes can be extended to create subclasses that inherit properties and methods from the parent class.
 */

// Example of a class in JavaScript
class Person2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person3 = new Person2('Alice', 30);
person3.greet(); // Output: Hello, my name is Alice and I am 30 years old.


/*-----------------------------------------------ES7-----------------------------------------------*/
// 1. Exponentiation Operator
/**
 * - The exponentiation operator (**) raises the left operand to the power of the right operand.
 * - The exponentiation operator is a shorthand for Math.pow() and provides a more concise way to perform exponentiation.
 * - The exponentiation operator can be used to calculate the power of a number.
 * - The exponentiation operator has right-to-left associativity.
 * - The exponentiation operator can be used with negative numbers and decimal numbers.
 * - The exponentiation operator can be used with variables, expressions, and function calls.
 */

// Exponentiation operator
const square1 = 2 ** 2;
console.log(square1); // Output: 4

const cube = 2 ** 3;
console.log(cube); // Output: 8

const power = 2 ** 8;
console.log(power); // Output: 256

const negative = (-2) ** 2;
console.log(negative); // Output: 4

const decimal = 2.5 ** 2;
console.log(decimal); // Output: 6.25

const base = 2;
const exponent = 3;
const result = base ** exponent;
console.log(result); // Output: 8

const expression = (2 + 2) ** 2;
console.log(expression); // Output: 16

const fn = () => 2;
const call = fn() ** 3;
console.log(call); // Output: 8


// 2. Array.prototype.includes()
/**
 * - The Array.prototype.includes() method determines whether an array includes a certain element.
 * - The Array.prototype.includes() method returns true if the array contains the specified element, and false otherwise.
 * - The Array.prototype.includes() method is similar to the Array.prototype.indexOf() method but returns a boolean value.
 * - The Array.prototype.includes() method can be used to check if an array contains a specific value.
 * - The Array.prototype.includes() method can be used with strings, numbers, and objects.
 * - The Array.prototype.includes() method can be used to check for the presence of NaN values.
 * - The Array.prototype.includes() method can be used to check for the presence of undefined values.
 */

// Array.prototype.includes() method
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.includes(3)); // Output: true
console.log(numbers2.includes(6)); // Output: false

const names = ['Alice', 'Bob', 'Charlie'];
console.log(names.includes('Bob')); // Output: true
console.log(names.includes('David')); // Output: false

const values = [1, 'Alice', true];
console.log(values.includes('Alice')); // Output: true
console.log(values.includes(false)); // Output: false

const array = [NaN, undefined];
console.log(array.includes(NaN)); // Output: true
console.log(array.includes(undefined)); // Output: true


/*-----------------------------------------------ES8-----------------------------------------------*/




/*-----------------------------------------------ES9-----------------------------------------------*/
// 1. Asynchronous Iteration
/**
 * - Asynchronous iteration allows for asynchronous operations to be performed in a sequential manner.
 * - Asynchronous iteration is achieved using the for-await-of loop in JavaScript.
 * - Asynchronous iteration is useful for handling asynchronous data streams and processing asynchronous operations.
 * - Asynchronous iteration can be used with async generators, async iterators, and other asynchronous data sources.
 * - Asynchronous iteration provides a way to consume asynchronous data in a more structured and organized manner.
 * - Asynchronous iteration is a powerful feature of modern JavaScript that simplifies working with asynchronous code.
 * - Asynchronous iteration can be used with promises, async functions, and other asynchronous constructs.
 */

// Example of asynchronous iteration with for-await-of loop
const delay1 = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const asyncGenerator = async function*() {
    yield await delay1(1000);
    yield await delay1(2000);
    yield await delay1(3000);
};

const consume = async () => {
    for await (const value of asyncGenerator()) {
        console.log(`Received value: ${value}`);
    }
};

consume();
// Output:
// Received value: undefined
// Received value: undefined
// Received value: undefined


// 2. Promise.prototype.finally()
/**
 * - The Promise.prototype.finally() method allows you to run code after a promise is settled (fulfilled or rejected).
 * - The Promise.prototype.finally() method is useful for cleanup tasks that need to be performed regardless of the promise outcome.
 * - The Promise.prototype.finally() method is called when the promise is settled, whether it is fulfilled or rejected.
 * - The Promise.prototype.finally() method is similar to the finally block in try-catch-finally statements.
 * - The Promise.prototype.finally() method is useful for releasing resources, closing connections, and other cleanup operations.
 * - The Promise.prototype.finally() method can be used with promises, async functions, and other asynchronous constructs.
 * - The Promise.prototype.finally() method simplifies handling cleanup tasks in asynchronous code.
 */

// Example of Promise.prototype.finally() method
const fetchData = (url: string) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('Completed fetch operation'));
};

fetchData('https://jsonplaceholder.typicode.com/posts/1');
// Output:
// Completed fetch operation



/*-----------------------------------------------ES10-----------------------------------------------*/
// 1. Array.prototype.flat()
/**
 * - The Array.prototype.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * - The Array.prototype.flat() method is useful for flattening nested arrays and creating a single-level array.
 * - The Array.prototype.flat() method can be used to remove empty slots and undefined values from arrays.
 * - The Array.prototype.flat() method can be used to flatten arrays with multiple levels of nesting.
 * - The Array.prototype.flat() method can be used with the flatMap() method to transform and flatten arrays.
 * - The Array.prototype.flat() method simplifies working with nested arrays and processing array data.
 */

// Example of Array.prototype.flat() method
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // Output: [1, 2, 3, 4]

// 2. Array.prototype.flatMap()
/**
 * - The Array.prototype.flatMap() method maps each element using a mapping function, then flattens the result into a new array.
 * - The Array.prototype.flatMap() method is useful for transforming and flattening arrays in a single step.
 * - The Array.prototype.flatMap() method is similar to using the map() method followed by the flat() method.
 * - The Array.prototype.flatMap() method can be used to process array data and return a new array with the results.
 * - The Array.prototype.flatMap() method simplifies working with arrays and transforming array elements.
 */

// Example of Array.prototype.flatMap() method
const numbers3 = [1, 2, 3, 4, 5];
const doubled = numbers3.flatMap(num => [num, num * 2]);
console.log(doubled); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// 3. String.prototype.trimStart() and String.prototype.trimEnd()
/**
 * - The String.prototype.trimStart() method removes whitespace from the beginning of a string.
 * - The String.prototype.trimEnd() method removes whitespace from the end of a string.
 * - The String.prototype.trimStart() and String.prototype.trimEnd() methods are useful for cleaning up strings.
 * - The String.prototype.trimStart() and String.prototype.trimEnd() methods are similar to the trim() method but only remove leading or trailing whitespace.
 * - The String.prototype.trimStart() and String.prototype.trimEnd() methods are part of the ECMAScript 2019 specification.
 */

// Example of String.prototype.trimStart() and String.prototype.trimEnd() methods
const text = '   Hello, World!   ';
console.log(text.trimStart()); // Output: 'Hello, World!   '
console.log(text.trimEnd()); // Output: '   Hello, World!'
console.log(text.trim()); // Output: 'Hello, World!'
// 4. Object.fromEntries()
/**
 * - The Object.fromEntries() method transforms a list of key-value pairs into an object.
 * - The Object.fromEntries() method is the counterpart to the Object.entries() method.
 * - The Object.fromEntries() method is useful for converting arrays of key-value pairs into objects.
 * - The Object.fromEntries() method is part of the ECMAScript 2019 specification.
 */

// Example of Object.fromEntries() method
const entries = [['name', 'Alice'], ['age', 30]];
const obj = Object.fromEntries(entries);
console.log(obj); // Output: { name: 'Alice', age: 30 }



/*-----------------------------------------------ES11-----------------------------------------------*/
// 1. Optional Chaining
/**
 * - Optional chaining allows you to access nested object properties without worrying about null or undefined values.
 * - Optional chaining is achieved using the ?. operator to safely access nested properties.
 * - Optional chaining prevents errors when accessing properties of null or undefined objects.
 * - Optional chaining is useful for working with APIs and data structures that may contain missing or incomplete data.
 * - Optional chaining simplifies working with nested object properties and handling missing values.
 * - Optional chaining is part of the ECMAScript 2020 specification.
 */

// Example of optional chaining
const person4 = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'New York',
        zip: 10001
    }
};

console.log(person4.address?.city); // Output: 'New York'
// console.log(person4.address?.country); // Output: undefined
// console.log(person4.phone?.number); // Output: undefined


// 2. Nullish Coalescing Operator
/**
 * - The nullish coalescing operator (??) provides a way to handle null or undefined values in JavaScript.
 * - The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined.
 * - The nullish coalescing operator is useful for providing default values for null or undefined variables.
 * - The nullish coalescing operator is similar to the logical OR (||) operator but only returns the right-hand operand for null or undefined values.
 * - The nullish coalescing operator is part of the ECMAScript 2020 specification.
 */
