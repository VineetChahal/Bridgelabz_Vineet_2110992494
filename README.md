### DATE:- 18 December 2024
---

### **Overview**  
This branch focuses on advanced concepts in JavaScript, particularly WeakMap, WeakSet, Destructuring, and the comparison between `var` and `let`. Additionally, it includes the development of the Employee Wage system as per Bridgelabz requirements.  

---

## **Topics Covered**  

### **WeakMap and WeakSet**  
- Specialized collections for objects with weak references.  
- Key differences compared to Map and Set:  
  - WeakMap keys and WeakSet values must be objects and are weakly referenced.  
  - Efficient for memory management and garbage collection.  
- Use cases include caching objects and handling ephemeral data.  

### **Destructuring**  
- A concise way to unpack values from arrays or objects.  
- Simplifies code and improves readability.  
- Commonly used for variable assignments, function parameters, and array/object manipulation.  

### **The old `var` vs `let`**  
- Comparison of scoping:  
  - `var` has function scope, while `let` has block scope.  
- Hoisting differences:  
  - `var` is hoisted and initialized as `undefined`.  
  - `let` is hoisted but remains uninitialized (temporal dead zone).  
- `let` is preferred for modern JavaScript development due to predictable scoping and safety.

---

## **Employee Wage System**  

### **Files Developed**  
- **UC1.js**:  
  - Check if an employee is present or absent using `Math.random`.  

- **UC2.js**:  
  - Calculate daily employee wages based on working hours (No Time, Half Time, Full Time).  

- **UC3.js**:  
  - Refactor code to encapsulate working hour calculation in a reusable function.  

- **UC4.js**:  
  - Calculate monthly wages for 20 working days using a loop for daily wage computation.  
  - Total earnings are calculated by summing daily wages.  

---
