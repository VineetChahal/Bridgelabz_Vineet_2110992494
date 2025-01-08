### DATE: 7 January 2025

#### Overview
This branch explores advanced JavaScript concepts, including **Class Inheritance**, **Extending Built-in Classes**, **Promises and Chaining**, **Promise API**, **Error Handling with Promises**, and **Custom Errors**. Additionally, it incorporates the **SOLID Design Principles** to enhance software design and maintainability.

#### Topics Covered

**Class Inheritance**  
Inheritance allows classes to derive properties and methods from other classes, enabling code reuse and extensibility.

- **Syntax**:  
  ```javascript
  class Animal {
      constructor(name) {
          this.name = name;
      }
      speak() {
          console.log(`${this.name} makes a sound.`);
      }
  }

  class Dog extends Animal {
      speak() {
          console.log(`${this.name} barks.`);
      }
  }

  const dog = new Dog("Buddy");
  dog.speak(); // Outputs: Buddy barks.
  ```

- **Key Points**:  
  - Use `extends` to create a subclass.  
  - Use `super` to call the parent class constructor or methods.

**Extending Built-in Classes**  
JavaScript allows extending built-in classes like `Array`, `Error`, or `Set` to create custom behaviors.

- **Example**: Extending the `Array` class  
  ```javascript
  class CustomArray extends Array {
      getFirst() {
          return this[0];
      }
  }

  const arr = new CustomArray(1, 2, 3);
  console.log(arr.getFirst()); // Outputs: 1
  ```

- **Best Practices**:  
  - Ensure compatibility with existing methods.  
  - Be cautious of overriding methods unintentionally.

**Promises and Chaining**  
Promises are used to handle asynchronous operations in JavaScript.

- **Basic Syntax**:  
  ```javascript
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 1000);
  });

  promise.then(result => console.log(result)); // Outputs: Success
  ```

- **Chaining**:  
  ```javascript
  promise
      .then(result => result + "!" )
      .then(finalResult => console.log(finalResult)); // Outputs: Success!
  ```

**Promise API**  
The Promise API includes utility methods for working with multiple promises.

- **Common Methods**:  
  - `Promise.all`: Waits for all promises to resolve or rejects if any fail.  
  - `Promise.race`: Resolves/rejects as soon as the first promise settles.  
  - `Promise.allSettled`: Waits for all promises to settle (resolve or reject).  
  - `Promise.any`: Resolves with the first resolved promise or fails if all reject.

- **Example**:  
  ```javascript
  const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3)
  ];

  Promise.all(promises).then(results => console.log(results)); // Outputs: [1, 2, 3]
  ```

**Error Handling with Promises**  
Errors in promises can be handled using `.catch` or `try...catch` in async/await syntax.

- **Example**:  
  ```javascript
  promise
      .then(result => {
          throw new Error("Something went wrong");
      })
      .catch(error => console.error(error.message)); // Outputs: Something went wrong
  ```

**Custom Errors**  
Custom errors allow creating domain-specific error types.

- **Example**:  
  ```javascript
  class ValidationError extends Error {
      constructor(message) {
          super(message);
          this.name = "ValidationError";
      }
  }

  throw new ValidationError("Invalid input");
  ```

**SOLID Design Principles**  
SOLID principles guide object-oriented design to improve software quality and maintainability.

1. **Single Responsibility Principle (SRP)**: A class should have only one reason to change.
   - **Example**: Separate data handling and UI rendering into different classes.

2. **Open/Closed Principle (OCP)**: Classes should be open for extension but closed for modification.
   - **Example**: Use inheritance or composition to extend functionality instead of modifying existing code.

3. **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types.
   - **Example**: Ensure derived classes preserve the behavior of the parent class.

4. **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on methods they do not use.
   - **Example**: Split large interfaces into smaller, more specific ones.

5. **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules; both should depend on abstractions.
   - **Example**: Use dependency injection to provide dependencies at runtime.

---

