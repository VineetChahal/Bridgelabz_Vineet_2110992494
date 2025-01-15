/** 
 * Class in TypeScript
 * - A class is a blueprint for creating objects that have similar properties and methods.
 * - Classes in TypeScript are similar to classes in other object-oriented programming languages like Java and C#.
 * - Classes encapsulate data and behavior into a single unit, providing a way to model real-world entities.
 * - Classes define the structure and behavior of objects, allowing for code reuse and modularity.
 * - Classes in TypeScript support object-oriented concepts such as inheritance, encapsulation, and polymorphism.
 * - Classes can have properties, methods, constructors, access modifiers, and other class members.
 * - Classes provide a way to create objects with predefined properties and methods.
 * - Classes can be extended to create subclasses that inherit properties and methods from the parent class.
 */

// Example of a class in TypeScript

class Persons {
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

const person1 = new Persons('Vineet', 21);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.