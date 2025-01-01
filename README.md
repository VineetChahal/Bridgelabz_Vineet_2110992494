### DATE: 1 January 2025  

#### Overview  
This branch explores advanced JavaScript concepts, focusing on **Decorators and Forwarding**, **Call/Apply**, **Function Binding**, **Objects**, and **Classes**. These topics deepen the understanding of object-oriented programming in JavaScript and enhance function manipulation techniques.  

#### Topics Covered  

**Decorators and Forwarding**  
Decorators are functions that enhance or modify the behavior of other functions or methods, while Forwarding involves passing function calls to another function with or without modifications.  

- **Decorators**:  
  - **Definition**: A wrapper function that adds functionality to an existing function.  
  - **Example**:  
    ```javascript
    function logDecorator(func) {
        return function(...args) {
            console.log(`Arguments: ${args}`);
            return func(...args);
        };
    }

    const sum = (a, b) => a + b;
    const decoratedSum = logDecorator(sum);
    console.log(decoratedSum(2, 3)); // Logs arguments and result.
    ```  
  - Use Cases: Logging, memoization, access control, and input validation.  

- **Forwarding**:  
  - Forwards a function call to another function with optional preprocessing.  
  - **Example**:  
    ```javascript
    function multiply(a, b) {
        return a * b;
    }

    const forwardMultiply = (...args) => multiply(...args);
    console.log(forwardMultiply(2, 3)); // Outputs: 6
    ```  

**Call/Apply**  
These methods control the context (`this`) of function execution.  

- **`call`**: Invokes a function with a specified `this` value and arguments passed individually.  
  ```javascript
  function greet(greeting) {
      console.log(`${greeting}, ${this.name}`);
  }

  const user = { name: 'Alice' };
  greet.call(user, 'Hello'); // Outputs: Hello, Alice
  ```  

- **`apply`**: Similar to `call`, but arguments are passed as an array.  
  ```javascript
  greet.apply(user, ['Hi']); // Outputs: Hi, Alice
  ```  

- **Differences**:  
  - `call` uses arguments directly, while `apply` uses an array.  

**Function Binding**  
Binding fixes the `this` context of a function to a specific object.  

- **Syntax**:  
  ```javascript
  const user = {
      name: 'Alice',
      sayHi() {
          console.log(`Hi, I'm ${this.name}`);
      }
  };

  const sayHi = user.sayHi.bind(user);
  sayHi(); // Outputs: Hi, I'm Alice
  ```  
- Use Cases: Passing methods as callbacks, ensuring correct `this` context.  

**Objects**  
Objects are key-value pairs that represent data and behavior.  

- **Creation Methods**:  
  - Object literals:  
    ```javascript
    const user = { name: 'Alice', age: 25 };
    ```  
  - Constructor functions:  
    ```javascript
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    ```  
  - `Object.create`: Creates objects with a specified prototype.  

- **Features**:  
  - Properties and methods.  
  - Dynamic key addition/removal.  
  - Prototypes for inheritance.  

**Classes**  
Classes are syntactic sugar for constructor functions and prototypes, simplifying object-oriented programming.  

- **Syntax**:  
  ```javascript
  class User {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }

      sayHi() {
          console.log(`Hi, I'm ${this.name}`);
      }
  }

  const user = new User('Alice', 25);
  user.sayHi(); // Outputs: Hi, I'm Alice
  ```  

- **Features**:  
  - Inheritance:  
    ```javascript
    class Admin extends User {
        constructor(name, age, role) {
            super(name, age);
            this.role = role;
        }
    }
    ```  
  - Static methods and fields.  
  - Getters and setters.  

---
