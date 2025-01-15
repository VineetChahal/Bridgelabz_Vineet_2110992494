**Date:** January 15, 2025

## Topics Covered

### Datatypes
In TypeScript, datatypes define the kind of values a variable can hold. Common datatypes include:
- **number**: For numeric values.
- **string**: For textual data.
- **boolean**: For true/false values.
- **array**: For storing collections of values.
- **tuple**: For fixed-size arrays with specified types for each element.
- **enum**: For defining a set of named constants.
- **any**: For variables that can hold any type.
- **void**: For functions that do not return a value.
- **null** and **undefined**: For null and undefined values respectively.
- **never**: For values that never occur, such as errors or infinite loops.
- **unknown**: For variables with a type that is not known at the time of assignment. It is safer than `any` and requires type checking before usage.

### Class
A class in TypeScript is a blueprint for creating objects. It encapsulates data and methods, and supports features like access modifiers (`public`, `private`, `protected`) and constructors. Classes can implement interfaces and extend other classes for reuse and abstraction.

### Objects
Objects in TypeScript are instances of classes or can be created with object literals. They consist of key-value pairs where the type of each key and value can be explicitly defined.

### ECMAScript (ES10 to ES12)
- **ES10 (2019)**:
  - Introduced `Array.prototype.flat()` and `flatMap()` for working with nested arrays.
  - Added `Object.fromEntries()` for converting key-value pairs into an object.
  - Introduced `trimStart()` and `trimEnd()` methods for strings.
  - `Symbol.description` provides a description of a symbol.

- **ES11 (2020)**:
  - Introduced `BigInt` for working with arbitrary-precision integers.
  - Added the optional chaining operator (`?.`) for safe property access.
  - Introduced the nullish coalescing operator (`??`) to provide default values.
  - Added `Promise.allSettled()` for handling multiple promises.
  - Dynamic imports (`import()`) allow importing modules dynamically.

- **ES12 (2021)**:
  - Added `replaceAll()` for replacing all occurrences of a substring in a string.
  - Introduced logical assignment operators (e.g., `||=`, `&&=`, `??=`).
  - Enhanced numeric separators (`_`) for readability in large numbers.
  - WeakRefs and FinalizationRegistry provide advanced memory management options.
