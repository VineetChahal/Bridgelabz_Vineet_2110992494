## DATE:- 13 DECEMBER 2024

## TOPICS COVERED:-
1. [JavaScript Basics](#javascript-basics)
   - Variables and Data Types
   - Operators
   - Conditional Statements
   - Loops
   - Functions
   - Error Handling
2. [Methods of Primitives](#methods-of-primitives)
   - Number Methods
   - String Methods
3. [REPL](#repl)

---

## JavaScript Basics

### 1. Variables and Data Types
- **Variables**
  - `let`, `const`, and `var`
  ```javascript
  let age = 25;
  const pi = 3.14;
  var name = "Alice";
  console.log(age, pi, name);
  ```
- **Data Types**
  - Primitive: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
  - Non-Primitive: `object`, `array`, `function`
  ```javascript
  let number = 42;
  let text = "Hello, World!";
  let user = { name: "Alice", age: 30 };
  console.log(typeof number, user.name);
  ```

### 2. Operators
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Comparison Operators**: `==`, `===`, `<`, `>`, `<=`, `>=`
- **Logical Operators**: `&&`, `||`, `!`
```javascript
console.log(5 + 3, 5 === "5", true && false);
```

### 3. Conditional Statements
- **if-else**
  ```javascript
  let score = 85;
  if (score >= 90) console.log("A grade");
  else if (score >= 75) console.log("B grade");
  else console.log("C grade");
  ```
- **switch-case**
  ```javascript
  let fruit = "apple";
  switch (fruit) {
    case "apple": console.log("Apples are red!"); break;
    case "banana": console.log("Bananas are yellow!"); break;
    default: console.log("Unknown fruit.");
  }
  ```

### 4. Loops
- **for Loop**
  ```javascript
  for (let i = 0; i < 5; i++) console.log(i);
  ```
- **while Loop**
  ```javascript
  let i = 0;
  while (i < 5) console.log(i++);
  ```

### 5. Functions
- **Function Declaration**
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice"));
  ```
- **Arrow Functions**
  ```javascript
  const multiply = (x, y) => x * y;
  console.log(multiply(2, 3));
  ```

### 6. Error Handling
- **try-catch**
  ```javascript
  try {
    JSON.parse("{ malformed JSON }");
  } catch (error) {
    console.log("Error:", error.message);
  }
  ```

---

## Methods of Primitives

### 1. Number Methods
- **`toFixed()`**: Formats a number to fixed decimal places.
  ```javascript
  let num = 123.456;
  console.log(num.toFixed(2)); // Outputs: "123.46"
  ```
- **`parseInt()` and `parseFloat()`**
  ```javascript
  console.log(parseInt("123"), parseFloat("123.45"));
  ```

### 2. String Methods
- **`toUpperCase()` and `toLowerCase()`**
  ```javascript
  let str = "Hello";
  console.log(str.toUpperCase(), str.toLowerCase());
  ```
- **`substring()` and `slice()`**
  ```javascript
  let str = "JavaScript";
  console.log(str.substring(0, 4), str.slice(-6));
  ```
- **`trim()` and `replace()`**
  ```javascript
  let str = "   Hello, World!   ";
  console.log(str.trim().replace("Hello", "Hi"));
  ```

---

## REPL

### What is REPL?
- **R**ead: Reads your input.
- **E**val: Evaluates the input.
- **P**rint: Prints the output.
- **L**oop: Repeats the process.

### Accessing REPL
1. **Node.js**: Open terminal, type `node`, and press Enter.
2. **Browser Console**: Open developer tools (`Ctrl+Shift+I` or `F12`) and go to the Console tab.

### Examples
- **Basic Arithmetic**
  ```javascript
  5 + 10; // Outputs: 15
  _ * 2;  // Outputs: 30 (last result stored in `_`)
  ```
- **Variable Manipulation**
  ```javascript
  let x = 10;
  x += 5; // Outputs: 15
  ```
- **String Manipulation**
  ```javascript
  "hello".toUpperCase(); // Outputs: "HELLO"
  ```

---

## Resources
- [MDN Web Docs - JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Node.js REPL Documentation](https://nodejs.org/api/repl.html)
- [JavaScript.info](https://javascript.info/)

