// Analyze the Time Complexity of Summing Elements in an Array

// Objective:

// ● Write a JavaScript function to sum all elements of an array.

// ● Analyze the time complexity of the algorithm.

// 📌 Instructions for Students:

// ✔ Fill in the missing function logic to sum up all elements in the array.

// ✔ Analyze the time complexity and explain why it follows O(n), O(1), or any other complexity.

// ✔ Consider edge cases such as an empty array, negative numbers, and single-element arrays.

let arr = [4, 7, 8, 10, 12, 24, 56, 78];

function sumArr(arr) {
    let sum = - 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`${sumArr(arr)}`);

// Time complexity: O(n)