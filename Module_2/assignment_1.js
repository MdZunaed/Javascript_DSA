/*Analyze the Time Complexity of Summing Elements in an Array
● Write a JavaScript function to sum all elements of an array.
● Analyze the time complexity of the algorithm.
*/

function calculateSum(arr) {
    // Initialize sum variable
    let sum = 0;

    // Loop through the array and accumulate the sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Return the total sum
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5]; // Example test values
console.log(calculateSum(numbers)); // Expected Output: 15

/**
 * 🕒 Time Complexity: O(n)
 * 
 * ------------------------------
 * ❓ Explaination of why the time complexity is O(n):
 *    - The function iterates through the entire array once.
 *    - Each element is accessed and added to `sum`, making it a linear operation.
 *    - The number of operations is directly proportional to `n` (size of the array).
 * 
 * ------------------------------
 * 
 * 🔹 What is the time complexity if the array is empty?
 *    - O(1) (The loop doesn't execute, only initialization and return statement run.)
 * 
 * ------------------------------
 * 
 * 🔹 What is the time complexity if all elements are negative?
 *    - O(n) (The loop still runs `n` times; the sign of elements doesn’t affect complexity.)
 * 
 * ------------------------------
 * 
 * 🔹 What is the time complexity if the array contains only one element?
 *    - O(1) (The loop runs only once, which is constant time.)
 * 
 */