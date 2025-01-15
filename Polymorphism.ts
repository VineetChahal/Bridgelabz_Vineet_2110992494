/**
 * Polymorphism in TypeScript
 * - Polymorphism is the ability of an object to take on many forms.
 * - In TypeScript, polymorphism is achieved by method overriding.
 * - Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its superclass.
 * - The overridden method in the subclass should have the same signature as the method in the superclass.
 * - Polymorphism allows objects of different classes to be treated as objects of a common superclass.
 * - When a method is called on an object, the specific implementation of the method is determined at runtime based on the type of the object.
 * - This allows for dynamic method dispatch, where the appropriate method implementation is selected based on the actual type of the object.
 * - Polymorphism is a key feature of object-oriented programming that enables code reuse and flexibility.
 * - It allows for more generic and flexible code that can work with objects of different types without knowing their specific class.
 * - Polymorphism is a powerful concept that promotes code extensibility and maintainability.
 * - It enables the creation of code that is more modular, reusable, and scalable.
 * - Polymorphism is a fundamental principle of object-oriented design that helps in building robust and flexible software systems.
 * - Polymorphism is a key aspect of the Liskov Substitution Principle, which states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
 * - Polymorphism is a core concept in object-oriented programming that allows for code reuse, flexibility, and extensibility.
 */

// Example of polymorphism in TypeScript

class Car {
    drive(): void {
        console.log("The car is driving");
    }
}

class SportsCar extends Car {
    drive(): void {
        console.log("The sports car is driving fast");
    }
}

class Truck extends Car {
    drive(): void {
        console.log("The truck is driving slowly");
    }
}

function testDrive(car: Car): void {
    car.drive();
}

const mySportsCar = new SportsCar();
const myTruck = new Truck();

testDrive(mySportsCar); // Output: The sports car is driving fast
testDrive(myTruck); // Output: The truck is driving slowly

// Expected output:
// The sports car is driving fast
// The truck is driving slowly
