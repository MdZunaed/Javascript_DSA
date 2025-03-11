/*Find the Maximum Number in an Array & Analyze Complexity
● Implement a function to find the maximum number in an array
● Analyze its time and space complexity.
*/

function findMax(arr) {
    if (arr.length === 0) {
        return console.error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const numbers = [4, 12, 8, 10, 16, 5, 2];
console.log(findMax(numbers)); // Expected Output: 16

/**
 * 🕒 Time Complexity: O(n)
 * 
 * ------------------------------
 * ❓ Explaination why the time complexity is O(n):
 *    -- The function iterates through the array once, making a single comparison for each element.
 *    -- If n is the length of the array, the loop runs O(n) times.
 * 
 * ------------------------------
 * 
 * 💾 Space Complexity: O(1)
 * 
 * ------------------------------
 * ❓ Explain why the space complexity is O(1):
 *    -- The function uses only a single variable (max) to store the maximum value.
 *    -- It does not create extra arrays or data structures.
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if the array is empty?
 *    - O(1) (No extra space is allocated)
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if all elements are negative?
 *    - O(1) (No extra space is allocated)
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if the array contains only one element?
 *    - O(1) (Space usage remains the same)
 * 
 */