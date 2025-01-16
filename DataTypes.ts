// DataTypes in TypeScript:

/*
    - TypeScript is a statically typed language.
    - TypeScript supports the following data types:
        - Primitive Data Types
        - Composite Data Types
*/


/*
    - The Primitive Data Types in TypeScript are:
        - number (e.g., 10, 10.5) - Represents numeric values.
        - string (e.g., "Hello", 'World') - Represents textual data.
        - boolean (e.g., true, false) - Represents logical values.
*/

// Examples:
let age: number = 25;
let firstName: string = "John";
let isStudent: boolean = false;


/*
    - The Composite Data Types in TypeScript are:
        - object (e.g., { name: "John", age: 25 }) - Represents a collection of key-value pairs.
        - array (e.g., [1, 2, 3], ['Alice', 'Bob']) - Represents a list of elements.
        - any (e.g., 10, "Hello", true) - Represents any type.
*/

/*
    - Array (e.g., [1, 2, 3], ['Alice', 'Bob']) - Represents a list of elements.
            - number[] - Represents an array of numbers.
            - string[] - Represents an array of strings.
            - (number | string)[] - Represents an array of numbers or strings.
            - any[] - Represents an array of any type.
            - ReadonlyArray<T> - Represents a read-only array.
                - T - Represents the type of the array elements.
                - ReadonlyArray<T> - Prevents modification of the array elements.
                - ReadonlyArray<T> - Use when you want to prevent changes to the array elements like push , pop, shift, unshift, splice etc.
                - you can still use array methods like map, filter, reduce etc. that do not modify the array.
*/

// Examples:
let numbers : number[] = [1, 2, 3];
let strings : string[] = ["Alice", "Bob"];
let mixed : (number | string | boolean)[] = ["Alice", 1, true];
let anyArray : any[] = [1, "Alice", true];

//--READONLY ARRAY
let ReadonlyArray : ReadonlyArray<number> = [1, 2, 3];
console.log(ReadonlyArray);

const numberArray: readonly number[] = [1, 2, 3];
console.log(numberArray[0]); // Output: 1
// numberArray[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading
// numberArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

const mapNumberArray = numberArray.map((num) => num * 2); // Output: [2, 4, 6]
console.log(`map method on readonlyArray : ${mapNumberArray}`);
console.log(`Original ReadonlyArray : ${numberArray}`);

/*
    - any (e.g., 10, "Hello", true) - Represents any type.
        - Use 'any' when the type of a variable is not known during development.
    - noimplicitany - Disables the implicit 'any' type.
        - Add "noImplicitAny": true to the tsconfig.json file.
        - Ensures that all variables have an explicit type.
        - Helps catch errors early during development.
*/

// Examples:
let unknownType: any = 10;
unknownType = "Hello";
unknownType = true;
console.log(unknownType);

// noImplicitAny - Example:
let implicitunknownType; //-- Error: Variable 'unknownType' implicitly has an 'any' type.
implicitunknownType = 10;
implicitunknownType = "Hello";
implicitunknownType = true;
console.log(implicitunknownType);
// -- Variable 'unknownType' implicitly has an 'any' type in some locations where its type cannot be determined.
// -- to avoid this error we can use noImplicitAny flag in tsconfig.json file to make sure that all variables have an explicit type. If we don't provide any type to a variable then it will throw an error.
// noImplicitAny - Example:
let explicitunknownType: any;
explicitunknownType = 10;
explicitunknownType = "Hello";
explicitunknownType = true;
console.log(explicitunknownType);

// tuple - Tuple is a data type in TypeScript that allows you to store multiple values of different types in a single variable.
// Examples:
let person: [string, number] = ["John", 25];
console.log(person);

let employee: [string, number, boolean] = ["Alice", 30, true];
console.log(employee);

// Enums - Enums are a way to define a set of named constants.
// Examples:
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;
console.log(color); // Output: 1

// Enums - Example:
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Left;
console.log(direction); // Output: 3

// Enums - Example:
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

let currentStatus: Status = Status.Active;

console.log(currentStatus); // Output: "ACTIVE"

// never - The 'never' type represents the type of values that never occur.
// Examples:
function throwError(message: string): never {
    throw new Error(message);
}

// console.log(throwError("An error occurred vineet"));

// alias - Type aliases are a way to give a type a name.
// Examples:
type Age = number;
let age1: Age = 25;
console.log(age1);

type Person = {
    name: string;
    age: number;
};

let person1: Person = {
    name: "John",
    age: 25
};

console.log(person1);

// union - A union type is a type formed by combining two or more other types.
// Examples:
let unionType: number | string;
unionType = 10;
console.log(unionType);

unionType = "Hello";
console.log(unionType);

// intersection - An intersection type combines multiple types into one.
// Examples:
type First = { a: number };
type Second = { b: string };

type IntersectionType = First & Second;

let intersectionType: IntersectionType = {
    a: 10,
    b: "Hello"
};

console.log(intersectionType);