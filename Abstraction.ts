
/**
 * 1. Abstraction hides complex implementation details and shows only the necessary features of an object.
 * 2. In TypeScript, abstraction is achieved using abstract classes and methods.
 * 3. An abstract class cannot be instantiated and serves as a base class for other classes.
 * 4. An abstract method is declared in an abstract class but lacks an implementation.
 * 5. Abstract classes and methods define a common interface for related classes.
 * 6. Abstract classes can contain both abstract and non-abstract methods.
 * 7. Derived classes must implement abstract methods.
 * 8. Abstract classes can have constructors, properties, and methods like regular classes.
 * 9. Abstract classes provide a blueprint for other classes to follow.
 * 10. Abstract classes can have abstract properties that must be implemented in derived classes.
 * 11. Abstract classes can have abstract methods that must be implemented in derived classes.
 * 12. Abstract classes can have non-abstract methods that can be inherited by derived classes.
 * 13. Abstract classes define common behavior and structure for related classes.
 * 14. Abstract classes can have abstract and non-abstract members accessible by derived classes.
 * 15. Abstract classes can have abstract and non-abstract methods that can be overridden by derived classes.
 * 16. Abstract classes define a common interface for related classes.
 */

// Example of abstraction in TypeScript

abstract class Animal {
    constructor(public name: string) {}

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving...`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow");
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Bark
dog.move(); // Output: Buddy is moving...

const cat = new Cat("Whiskers");
cat.makeSound(); // Output: Meow
cat.move(); // Output: Whiskers is moving...
