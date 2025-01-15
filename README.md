# README

**Date:** January 14, 2025

## Topics Covered

### Array
In TypeScript, arrays are used to store multiple values of a specific type. Type annotations can be added to enforce the type of elements within the array, e.g., `number[]` or `string[]`.

### Array Methods
- **map**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **filter**: Creates a new array with all elements that pass a test implemented by the provided function.
- **reduce**: Executes a reducer function on each element of the array, resulting in a single output value. Types can be defined for the accumulator and the return value.

### Destructuring Arrays
Destructuring allows for unpacking values from arrays into distinct variables in a concise and type-safe way.

### Spread and Rest Operators
- **Spread**: Expands an array or object into individual elements or properties, while maintaining type information.
- **Rest**: Collects multiple elements or properties into a single array or object, adhering to the specified type.

### Stack
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. In TypeScript, stacks can be implemented using arrays with appropriate type annotations.

### Stack Methods
- **push**: Adds an element of a specific type to the top of the stack.
- **pop**: Removes and returns the top element of the stack, ensuring type safety.
- **size**: Returns the number of elements in the stack.
- **isEmpty**: Checks if the stack is empty.
- **peek**: Retrieves the top element of the stack without removing it, with a defined return type.
- **display**: Displays all elements in the stack, ensuring consistent type handling.

### Class
In TypeScript, a class is a blueprint for creating objects, with support for access modifiers (e.g., `public`, `private`, `protected`) to enforce encapsulation and type safety.

### Objects
Objects in TypeScript are instances of classes or defined using object type annotations. They support key-value pairs with explicit type definitions.

### Inheritance
Inheritance in TypeScript allows a class to derive properties and behaviors from another class, while maintaining type safety.
- **Single Inheritance**: One class inherits from another class.
- **Multiple Inheritance**: Simulated using interfaces.
- **Multilevel Inheritance**: A class inherits from a class, which in turn inherits from another class.
- **Hierarchical Inheritance**: Multiple classes inherit from a single class.
- **Hybrid Inheritance**: A combination of two or more types of inheritance, often implemented with interfaces.

### Encapsulation
Encapsulation in TypeScript is achieved using access modifiers like `private`, `protected`, and `public` to control access to class members.

### Polymorphism
Polymorphism in TypeScript allows methods to have multiple implementations, ensuring type compatibility. It enables treating objects as instances of their parent class or interface.

### Abstraction
Abstraction in TypeScript is implemented using abstract classes and interfaces. It hides implementation details and enforces a contract for derived classes.

### Promise
A Promise in TypeScript is an object representing the eventual completion or failure of an asynchronous operation, with support for type annotations to specify the resolved value.

### ECMAScript (ES6 to ES10)
- **ES6 (2015)**: Introduced features like `let`/`const`, arrow functions, classes, template literals, and modules.
- **ES7 (2016)**: Added exponential operator (`**`) and `Array.prototype.includes()`.
- **ES8 (2017)**: Introduced `async`/`await`, `Object.entries()`, and `Object.values()`.
- **ES9 (2018)**: Added rest/spread properties, asynchronous iteration, and `Promise.finally()`.
- **ES10 (2019)**: Introduced `Array.prototype.flat()`, `flatMap()`, `Object.fromEntries()`, and `trimStart()`/`trimEnd()`. 

TypeScript builds on ECMAScript standards by adding static typing and other features for improved code quality and maintainability.

