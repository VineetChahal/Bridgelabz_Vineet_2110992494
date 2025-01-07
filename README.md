### DATE: 2 January 2025  

#### Overview  
This branch covers key JavaScript concepts related to objects, including **Object References and Copying**, **Garbage Collection**, **Object Methods**, **The "this" Keyword**, and **Constructors with the "new" Operator**. These topics enhance understanding of object management, memory handling, and context binding.  

#### Topics Covered  

**Object References and Copying**  
Objects in JavaScript are stored and managed by reference, not by value. Copying an object creates references to the same memory location unless explicitly cloned.  

- **References**:  
  - When assigning an object to another variable, the reference is copied, not the object itself.  
    ```javascript
    let obj1 = { name: "Alice" };
    let obj2 = obj1;
    obj2.name = "Bob";
    console.log(obj1.name); // Outputs: Bob
    ```  

- **Shallow Copy**:  
  - Creates a copy of an object’s properties, but nested objects remain referenced.  
    ```javascript
    let shallowCopy = { ...obj1 };
    ```  

- **Deep Copy**:  
  - Creates an independent copy, including nested structures. Use libraries like Lodash or structured cloning techniques.  
    ```javascript
    let deepCopy = JSON.parse(JSON.stringify(obj1));
    ```  

**Garbage Collection**  
JavaScript automatically frees memory for objects no longer referenced, using garbage collection.  

- **Mechanism**:  
  - Garbage collection relies on the concept of "reachable objects," which are accessible from the root.  
  - If no references remain to an object, it becomes eligible for garbage collection.  

- **Best Practices**:  
  - Avoid circular references to prevent memory leaks.  
    ```javascript
    let a = {};
    let b = { ref: a };
    a.ref = b; // Circular reference
    ```  

**Object Methods**  
Objects can have functions (methods) as properties, enabling behavior encapsulation.  

- **Defining Methods**:  
  ```javascript
  let user = {
      name: "Alice",
      sayHi() {
          console.log(`Hi, I'm ${this.name}`);
      }
  };
  user.sayHi(); // Outputs: Hi, I'm Alice
  ```  

- **Common Built-in Methods**:  
  - `Object.keys(obj)`: Returns an array of property names.  
  - `Object.values(obj)`: Returns an array of property values.  
  - `Object.entries(obj)`: Returns an array of key-value pairs.  

**The "this" Keyword**  
The `this` keyword refers to the object that is executing the current function.  

- **Rules**:  
  - In an object method, `this` refers to the object.  
  - In regular functions, `this` is `undefined` in strict mode or the global object otherwise.  
  - In arrow functions, `this` is lexically bound (inherits from the enclosing scope).  
    ```javascript
    let user = {
        name: "Alice",
        sayHi() {
            console.log(this.name);
        }
    };
    user.sayHi(); // Outputs: Alice
    ```  

- **Use Cases**:  
  - Accessing properties or methods within an object.  
  - Dynamic context switching using `call`, `apply`, or `bind`.  

**Constructor and the "new" Operator**  
Constructors are special functions used to create and initialize objects. The `new` operator automates the process of creating and returning the object.  

- **Syntax**:  
  ```javascript
  function User(name) {
      this.name = name;
      this.sayHi = function() {
          console.log(`Hi, I'm ${this.name}`);
      };
  }

  let user = new User("Alice");
  user.sayHi(); // Outputs: Hi, I'm Alice
  ```  

- **How "new" Works**:  
  - Creates an empty object.  
  - Sets the `this` context to the new object.  
  - Assigns the `__proto__` property to the constructor's `prototype`.  
  - Returns the new object.  

- **Best Practices**:  
  - Use PascalCase for constructor names (e.g., `User`).  
  - Avoid adding excessive logic inside constructors.  

---

