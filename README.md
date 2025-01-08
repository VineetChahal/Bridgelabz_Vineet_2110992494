### DATE: 8 January 2025

#### Overview
This branch delves into key JavaScript topics, including **Extending Built-in Classes**, **Error Handling**, and **Promisification**. It also provides detailed explanations and practical insights into promises to simplify understanding and implementation.

#### Topics Covered

**Extending Built-in Classes**
JavaScript allows developers to extend built-in classes such as `Array`, `Error`, or `Set` to create custom functionalities and behaviors.

- **Purpose**: Extending built-in classes helps add domain-specific methods while leveraging existing features.

- **Example**: Custom Error Class
  ```javascript
  class ValidationError extends Error {
      constructor(message) {
          super(message);
          this.name = "ValidationError";
      }
  }

  try {
      throw new ValidationError("Invalid input");
  } catch (error) {
      console.error(`${error.name}: ${error.message}`); // Outputs: ValidationError: Invalid input
  }
  ```

- **Example**: Extending the `Array` Class
  ```javascript
  class ExtendedArray extends Array {
      getLast() {
          return this[this.length - 1];
      }
  }

  const numbers = new ExtendedArray(1, 2, 3);
  console.log(numbers.getLast()); // Outputs: 3
  ```

**Error Handling**
Error handling is crucial for creating robust and maintainable applications.

- **Using `try...catch`**
  ```javascript
  try {
      let result = JSON.parse("invalid json");
  } catch (error) {
      console.error("Parsing error:", error.message);
  }
  ```

- **Custom Errors**
  Custom errors improve clarity and allow tailored error messages.
  ```javascript
  class AppError extends Error {
      constructor(message, code) {
          super(message);
          this.code = code;
      }
  }

  throw new AppError("Resource not found", 404);
  ```

**Promises**
Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

- **States**:
  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.

- **Creating a Promise**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 1000);
  });
  ```

- **Chaining**:
  ```javascript
  promise
      .then(result => result + "!")
      .then(finalResult => console.log(finalResult)) // Outputs: Success!
      .catch(error => console.error(error));
  ```

**Promise API**
JavaScript provides utility methods to work with multiple promises:

- `Promise.all`: Resolves when all promises resolve; rejects if any promise rejects.
  ```javascript
  Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // Outputs: [1, 2]
  ```

- `Promise.race`: Resolves/rejects as soon as one promise resolves/rejects.
  ```javascript
  Promise.race([
      new Promise(resolve => setTimeout(() => resolve("First"), 100)),
      new Promise(resolve => setTimeout(() => resolve("Second"), 200))
  ]).then(console.log); // Outputs: First
  ```

- `Promise.allSettled`: Waits for all promises to settle (resolve or reject).
  ```javascript
  Promise.allSettled([
      Promise.resolve("Resolved"),
      Promise.reject("Rejected")
  ]).then(console.log);
  ```

**Promisification**
Promisification is the process of converting callback-based asynchronous functions into promise-based ones.

- **Example**:
  ```javascript
  const fs = require("fs");

  function promisify(func) {
      return function (...args) {
          return new Promise((resolve, reject) => {
              func(...args, (err, result) => {
                  if (err) reject(err);
                  else resolve(result);
              });
          });
      };
  }

  const readFileAsync = promisify(fs.readFile);

  readFileAsync("example.txt", "utf8")
      .then(data => console.log(data))
      .catch(error => console.error(error));
  ```

- **Use Cases**: Simplifying legacy code, integrating with modern APIs, and improving readability.

**Best Practices for Promises**
1. Always return a promise from a `.then` or `.catch` block if chaining further.
2. Use `async/await` for simpler syntax and better readability.
3. Handle errors using `.catch` or `try...catch` in `async` functions.
4. Avoid nesting promises; chain them instead for clarity.

---

