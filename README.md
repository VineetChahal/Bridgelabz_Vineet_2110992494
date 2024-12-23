### DATE: 23 December 2024

### Overview
This branch focuses on core JavaScript concepts, emphasizing the mechanics of the Event Loop, the role of Event Handlers, Type Conversions, and the impact of the "use strict" directive. It provides a comprehensive understanding of these topics to enhance both foundational knowledge and practical coding skills.

### Topics Covered

#### Event Loop
The Event Loop is a mechanism that handles asynchronous operations, enabling non-blocking execution in JavaScript.

**Phases:**
1. Timers Phase: Executes callbacks from `setTimeout` and `setInterval`.
2. Pending Callbacks Phase: Handles I/O callbacks.
3. Idle, Prepare Phase: Used internally by the system.
4. Poll Phase: Processes I/O events and queues callbacks.
5. Check Phase: Executes `setImmediate` callbacks.
6. Close Callbacks Phase: Handles resource cleanup.

**Use Cases:** Managing asynchronous tasks and coordinating non-blocking operations.

#### Event Handlers
Event Handlers are functions that respond to specific events like user interactions or system events.

**Types of Event Handlers:**
1. Click Event Handlers: Triggered when an element is clicked.
2. Mouseover Handlers: Respond to hovering over an element.
3. Keydown Handlers: Triggered when a key is pressed.
4. Resize Handlers: Execute when the window is resized.
5. Scroll Handlers: Triggered during scrolling events.

**Best Practices:** Use `addEventListener` for flexibility and delegate events where needed.

#### Type Conversions
Type Conversion refers to converting one data type to another in JavaScript, either explicitly or implicitly.

**Types:**
- Implicit (Type Coercion): Automatic type conversion by JavaScript.
- Explicit: Manually converting types using functions like `Number()`, `String()`, or `Boolean()`.

**Ways to Type Cast:**
- Using constructor functions like `Number()`, `String()`, `Boolean()`.
- Using unary operators like `+` or `!!`.
- Using `parseInt()` and `parseFloat()` for strings to numbers.
- Using template literals for type conversion to strings.
- JSON methods like `JSON.stringify()` and `JSON.parse()`.

#### "use strict"
`"use strict"` enforces stricter parsing and error handling in JavaScript code.

**Benefits:** Improves debugging, prevents global variable leakage, and enforces modern practices.

**Usage:** Place at the top of a script or function to enable strict mode.

---

