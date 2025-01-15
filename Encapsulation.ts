/** 
 * 1. Encapsulation is the process of wrapping up of data and methods into a single unit called class.
 * 2. Encapsulation is used to hide the internal state and behavior of an object and only expose the necessary features.
 * 3. Encapsulation helps in achieving data hiding, abstraction, and access control.
 * 4. Encapsulation is a fundamental principle of object-oriented programming that promotes code modularity and reusability.
 * 5. Encapsulation allows objects to maintain their internal state and behavior while providing a controlled interface for interacting with the object.
 * 6. Encapsulation is achieved by using access modifiers such as public, private, and protected in TypeScript.
 * 7. Public access modifier allows access to the member from outside the class.
 * 8. Private access modifier restricts access to the member within the class.
 * 9. Protected access modifier allows access to the member within the class and its subclasses.
 * 10. Encapsulation helps in preventing unauthorized access to the internal state of an object.
 * 11. Encapsulation promotes data hiding and information hiding in object-oriented programming.
 * 12. Encapsulation helps in reducing complexity and increasing maintainability of code.
 */

// Example of encapsulation in TypeScript


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        if (age > 0) {
            this.age = age;
        } else {
            console.log("Please enter a valid age.");
        }
    }
}

const person = new Person("John Doe", 30);
console.log(person.getName()); // John Doe
person.setAge(31);
console.log(person.getAge()); // 31