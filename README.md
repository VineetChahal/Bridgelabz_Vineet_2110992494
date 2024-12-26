### DATE: 24 December 2024

### Overview
This branch focuses on core JavaScript concepts, emphasizing the mechanics of Comparisons, Conditional Branching, and User Interaction through methods like `alert`, `prompt`, and `confirm`. It provides insights into their practical use and best practices for effective coding.

---

### Topics Covered

#### **Comparisons**
Comparisons allow evaluating values against each other using operators.

**Types of Comparisons:**
- **Loose Equality (`==`)**: Compares values after type coercion.
- **Strict Equality (`===`)**: Compares values and types.
- **Relational Operators (`<`, `>`, `<=`, `>=`)**: Compare numerical or string values lexicographically.

```javascript
console.log(1 == '1'); // true (type coercion)
console.log(1 === '1'); // false (strict comparison)
console.log(10 > 5); // true
console.log('apple' > 'banana'); // false (lexicographical order)
```

**Use Cases:**
- Determine conditions for branching logic.
- Form validation.
- Sorting.

---

#### **Conditional Branching**
Conditional branching executes specific code blocks based on evaluated conditions.

**Types:**
- **if**: Executes code if a condition is true.
- **else if**: Adds additional conditions.
- **else**: Executes if no conditions are met.
- **switch**: Evaluates expressions and matches cases.

```javascript
const age = 20;
if (age < 18) {
    console.log('Minor');
} else if (age === 18) {
    console.log('Just turned adult');
} else {
    console.log('Adult');
}

// Example: Using switch
const day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of the workweek!');
        break;
    case 'Friday':
        console.log('Almost weekend!');
        break;
    default:
        console.log('Just another day.');
}
```

**Use Cases:**
- Handling user input.
- Managing application flow.
- State-based decisions.

---

#### **Interaction**
Interaction involves communicating with users via `alert`, `prompt`, and `confirm` dialogs.

**Methods:**
- **alert**: Displays a simple message.
- **prompt**: Asks for user input and returns it as a string.
- **confirm**: Asks for confirmation and returns true/false.

```javascript
// Example: alert
alert('Welcome to the website!');

// Example: prompt
const name = prompt('What is your name?');
console.log(`Hello, ${name}!`);

// Example: confirm
const isOk = confirm('Do you agree with the terms?');
console.log(isOk ? 'Agreed' : 'Disagreed');
```

**Best Practices:**
- Use these methods sparingly to avoid disrupting user experience.
- Validate and sanitize input received from `prompt`.

**Use Cases:**
- Notifications.
- User input collection.
- Confirmations for critical actions.

---
