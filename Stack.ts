/**  
 * Stack in TypeScript
 * - A stack is a linear data structure that follows the Last In First Out (LIFO) principle.
 * - Stacks are used to store elements in a sequential manner and support two main operations: push and pop.
 * - Stacks can be implemented using arrays or linked lists, with each approach having its own advantages and disadvantages.
 * - Stacks are commonly used in programming languages, operating systems, and other applications to manage function calls, memory allocation, and other tasks.
 * - Stacks provide a way to store and retrieve elements in a specific order, making them useful for a wide range of applications.
 */

// Example usage with array implementation:

class ArrayStack<T> {
    private items: T[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    push(data: T): void {
        this.items.push(data);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    display(): void {
        console.log(this.items.join(' '));
    }

    getSize(): number {
        return this.items.length;
    }
}

// Example usage:
const arrayStack = new ArrayStack<number>();
arrayStack.push(10);
arrayStack.push(20);
arrayStack.push(30);
console.log("Array Stack elements:");
arrayStack.display();
console.log("Top element:", arrayStack.peek());
console.log("Popped element:", arrayStack.pop());
console.log("Array Stack elements after pop:");
arrayStack.display();
console.log("Is array stack empty?", arrayStack.isEmpty());
console.log("Array Stack size:", arrayStack.getSize());

