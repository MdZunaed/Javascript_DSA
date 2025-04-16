/* Implement a stack data structure in JavaScript and use it to reverse a given string. */

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Function to reverse a string using the stack
function reverseString(str) {
    const stack = new Stack();
    let reversedString = '';
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }
    return reversedString;
}

// Example usage
const input = "hello";
console.log("Original String:", input);
console.log("Reversed String:", reverseString(input));

//-----------------------------------------

// Unit Tests
function runTests() {
    console.log("\nRunning Unit Tests...");

    // Test 1: Stack push and pop
    const stackTest = new Stack();
    stackTest.push(1);
    stackTest.push(2);
    stackTest.push(3);
    console.log(stackTest.pop() === 3 ? "Test 1 Passed" : "Test 1 Failed");
    console.log(stackTest.pop() === 2 ? "Test 2 Passed" : "Test 2 Failed");

    // Test 2: Stack isEmpty
    console.log(stackTest.isEmpty() === false ? "Test 3 Passed" : "Test 3 Failed");
    stackTest.pop();
    console.log(stackTest.isEmpty() === true ? "Test 4 Passed" : "Test 4 Failed");

    // Test 3: Stack peek
    stackTest.push(5);
    console.log(stackTest.peek() === 5 ? "Test 5 Passed" : "Test 5 Failed");

    // Test 4: String Reversal
    console.log(reverseString("world") === "dlrow" ? "Test 6 Passed" : "Test 6 Failed");
    console.log(reverseString("racecar") === "racecar" ? "Test 7 Passed" : "Test 7 Failed");
    console.log(reverseString("abc") === "cba" ? "Test 8 Passed" : "Test 8 Failed");
}

// Run tests
runTests();