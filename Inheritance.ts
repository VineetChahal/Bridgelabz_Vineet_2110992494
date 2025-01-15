/**
 * Inheritance in TypeScript
 * - Inheritance is a mechanism in which a new class inherits properties and methods from an existing class.
 * - TypeScript supports single and multilevel inheritance.
 * - The extends keyword is used to inherit properties and methods from a superclass.
 * - The super keyword is used to call the constructor and methods of the superclass.
 */

// Example of inheritance in TypeScript

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the superclass (Animal)
    }

    makeSound(): void {
        console.log(`${this.name} barks.`); // Override the makeSound method
    }
}

const dog = new Dog('Rex');
dog.makeSound(); // Output: Rex barks.

// Example of multilevel inheritance in TypeScript

class Puppy extends Dog {
    constructor(name: string) {
        super(name); // Call the constructor of the superclass (Dog)
    }

    makeSound(): void {
        console.log(`${this.name} yips.`); // Override the makeSound method
    }
}

const puppy = new Puppy('Buddy');
puppy.makeSound(); // Output: Buddy yips.