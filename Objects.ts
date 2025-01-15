/**
 * Object in TypeScript
 * - An object is an instance of a class that encapsulates data and behavior.
 * - Objects are used to model real-world entities and represent the state and behavior of those entities.
 * - Objects in TypeScript are created using object literals or by instantiating classes.
 * - Objects have properties that store data and methods that define behavior.
 * - Objects can be passed as arguments, returned from functions, and stored in variables.
 * - Objects can be used to organize and manipulate data in a structured way.
 * - Objects provide a way to represent complex data structures and relationships.
 * - Objects are a fundamental concept in object-oriented programming that enables code reuse and modularity.
 * - Objects can be used to create reusable components, build modular systems, and model real-world entities.
 */

// Example of an object in TypeScript

// Define an interface for the object
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
    greet: () => void;
}

// Create an object that adheres to the Person interface
const person: Person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Access object properties
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.isEmployed); // Output: true

// Call object method
person.greet(); // Output: Hello, my name is John Doe