/** 
 * Promise in TypeScript
 * - A promise is an object that represents the eventual completion or failure of an asynchronous operation.
 * - Promises are used to handle asynchronous operations in a more readable and manageable way.
 * - Promises can be in one of three states: pending, fulfilled, or rejected.
 * - Promises are created using the Promise constructor, which takes a callback function with two parameters: resolve and reject.
 * - The resolve function is called when the promise is fulfilled, and the reject function is called when the promise is rejected.
 * - Promises can be chained together using the then method to handle the result of the asynchronous operation.
 * - Promises provide a way to handle asynchronous code in a more structured and organized manner.
 * - Promises are a powerful tool for managing asynchronous operations and handling errors in a more elegant way.
 * - Promises are a key feature of modern JavaScript and are widely used in web development.
 */

// Example of a promise in TypeScript

const myPromise = new Promise<number>((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve(42); // Resolve with a value
    } else {
        reject("An error occurred"); // Reject with an error message
    }
});

myPromise
    .then((value) => {
        console.log("Promise resolved with value:", value);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });

// Create a promise that resolves after a delay
const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

// Use the promise to perform an asynchronous operation
console.log("Start");
delay(2000)
    .then(() => {
        console.log("After 2 seconds");
    })
    .then(() => {
        console.log("Another operation");
    });
console.log("End");

// Expected output:
// Start
// End
// After 2 seconds
// Another operation