### DATE: 31 December 2024  

#### Overview  
This branch delves into advanced JavaScript concepts, focusing on **Immediately Invoked Function Expressions (IIFE)**, **Named Function Expressions (NFE)**, the **"new Function" syntax**, and **Scheduling** techniques. These topics enhance the understanding of JavaScript's functional capabilities, dynamic execution, and task scheduling mechanisms.  

#### Topics Covered  

**Immediately Invoked Function Expression (IIFE)**  
An IIFE is a function that is executed immediately after being defined.  

- **Syntax**:  
  ```javascript
  (function() {
      console.log("IIFE executed!");
  })();
  ```  
- **Purpose**:  
  - Creates a separate scope to avoid polluting the global namespace.  
  - Often used for initialization tasks or encapsulating code.  
- **Variations**:  
  - Using arrow functions:  
    ```javascript
    (() => console.log("Arrow IIFE"))();
    ```  

**Named Function Expression (NFE)**  
NFE is a function expression with an explicit name, which is accessible within its own scope.  

- **Syntax**:  
  ```javascript
  let factorial = function fact(n) {
      return n <= 1 ? 1 : n * fact(n - 1);
  };
  ```  
- **Features**:  
  - Useful for recursion or debugging.  
  - The name is only visible inside the function's scope, not outside.  
- **Behavior**:  
  - Provides more meaningful stack traces in debugging.  
  - Cannot be reassigned, unlike the variable holding the function.  

**The "new Function" Syntax**  
The `new Function` syntax allows the creation of functions dynamically using strings.  

- **Syntax**:  
  ```javascript
  let sum = new Function('a', 'b', 'return a + b');
  console.log(sum(2, 3)); // Outputs: 5
  ```  
- **Use Cases**:  
  - Executing dynamic code.  
  - Implementing features like template engines or custom scripting.  
- **Caveats**:  
  - Slower and less secure than regular functions (vulnerable to injection attacks).  
  - Lacks closure access to outer variables.  

**Scheduling**  
JavaScript scheduling mechanisms allow the execution of functions at specific times or intervals.  

- **Methods**:  
  - **`setTimeout`**: Executes a function after a delay.  
    ```javascript
    setTimeout(() => console.log("Executed after 1 second"), 1000);
    ```  
  - **`setInterval`**: Repeatedly executes a function at fixed intervals.  
    ```javascript
    setInterval(() => console.log("Every 2 seconds"), 2000);
    ```  
  - **`clearTimeout`** and **`clearInterval`**: Cancel scheduled executions.  
- **Use Cases**:  
  - Asynchronous behavior, animations, and periodic tasks.  
- **Best Practices**:  
  - Use `setTimeout` instead of `setInterval` for more precise intervals.  
  - Avoid long-running tasks inside scheduled functions to prevent performance bottlenecks.  
