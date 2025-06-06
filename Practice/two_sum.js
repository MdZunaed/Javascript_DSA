/* 
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Example :
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
let nums = [2, 11, 8, 7, 12, 18, 15];
let target = 9

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

//console.log(twoSum(nums, target));

// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum2(nums, target) {
    const map = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        let other = target - nums[i];
        if (map.has(other)) {
            return [map.get(other), i]; 
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum2(nums, target));

