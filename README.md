### DATE: 6 January 2025

#### Overview
This branch delves into JavaScript concepts related to prototypes, inheritance, and native prototypes. Understanding these topics is crucial for mastering object-oriented programming in JavaScript and leveraging the language’s flexibility. Additionally, it includes key design principles such as DRY (Don't Repeat Yourself) and YAGNI (You Aren't Gonna Need It) to enhance code maintainability and efficiency.

#### Topics Covered

**Prototypes**  
In JavaScript, every object has an internal link to another object called its prototype, accessible via `__proto__` or `Object.getPrototypeOf`.

- **Prototype Chain**:  
  - Objects inherit properties and methods from their prototypes.  
  - The chain ends when `null` is reached (the root of all objects).  

- **Examples**:  
  ```javascript
  let animal = {
      eats: true
  };

  let rabbit = {
      jumps: true
  };

  rabbit.__proto__ = animal;

  console.log(rabbit.eats); // Outputs: true
  console.log(rabbit.jumps); // Outputs: true
  ```

- **Key Points**:  
  - Prototypes enable object inheritance.  
  - Avoid using `__proto__` in modern code; prefer `Object.getPrototypeOf` and `Object.setPrototypeOf`.

**Inheritance**  
Inheritance allows objects to derive properties and methods from other objects.

- **Creating Inheritance**:  
  ```javascript
  function Animal(name) {
      this.name = name;
  }

  Animal.prototype.sayHi = function () {
      console.log(`Hi, I am ${this.name}`);
  };

  let rabbit = new Animal("Rabbit");
  rabbit.sayHi(); // Outputs: Hi, I am Rabbit
  ```

- **ES6 Classes**:  
  Classes provide a cleaner syntax for creating inheritance chains.
  ```javascript
  class Animal {
      constructor(name) {
          this.name = name;
      }
      sayHi() {
          console.log(`Hi, I am ${this.name}`);
      }
  }

  class Rabbit extends Animal {
      constructor(name, color) {
          super(name);
          this.color = color;
      }
  }

  let rabbit = new Rabbit("Fluffy", "white");
  rabbit.sayHi(); // Outputs: Hi, I am Fluffy
  ```

- **Key Points**:  
  - Inheritance facilitates code reuse.  
  - Use `super` to call parent class constructors or methods.

**Native Prototypes**  
Native prototypes are the prototype objects of built-in JavaScript constructors (e.g., `Object`, `Array`, `Function`).

- **Extending Native Prototypes**:  
  - You can add methods to native prototypes, but it’s generally discouraged due to potential conflicts.
  ```javascript
  Array.prototype.last = function () {
      return this[this.length - 1];
  };

  let numbers = [1, 2, 3];
  console.log(numbers.last()); // Outputs: 3
  ```

- **Prototype Methods**:  
  - Examples include `Object.create`, `Object.getPrototypeOf`, and `Object.setPrototypeOf`.
  ```javascript
  let obj = Object.create(null); // Creates an object without a prototype
  console.log(Object.getPrototypeOf(obj)); // Outputs: null
  ```

- **Key Points**:  
  - Built-in prototypes can be enhanced, but this should be done cautiously.  
  - Use modern methods (e.g., `Object.create`) for better compatibility and readability.

**DRY (Don't Repeat Yourself)**  
DRY is a design principle aimed at reducing repetition in code by encapsulating reusable logic.

- **Key Features**:  
  - Encourages modular code structure.  
  - Improves maintainability by centralizing changes.

- **Examples**:  
  ```javascript
  function calculateArea(length, width) {
      return length * width;
  }

  console.log(calculateArea(5, 10)); // Outputs: 50
  console.log(calculateArea(7, 3));  // Outputs: 21
  ```

- **Best Practices**:  
  - Refactor duplicate logic into reusable functions or modules.  
  - Avoid over-abstraction that complicates understanding.

**YAGNI (You Aren't Gonna Need It)**  
YAGNI is a principle that advises against implementing features or logic that are not currently required.

- **Key Features**:  
  - Prevents overengineering.  
  - Focuses on delivering only what is needed.

- **Examples**:  
  - Instead of preemptively adding extra parameters to a function for future use, start simple and extend later as required:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // Outputs: 8
    ```

- **Best Practices**:  
  - Build features incrementally based on actual requirements.  
  - Regularly review and remove unused code.

---

