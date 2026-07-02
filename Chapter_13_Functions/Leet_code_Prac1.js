//Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

//Example 1:

//Input: nums = [-1,1,2,3,1], target = 2
//Output: 3
//Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
//- (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
//- (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
//- (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
//Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.


//Solution: using normal function and For Loop

var countPairs = function(nums, target) {
    let count = 0;
    
    // Outer loop picks the first index i
    for (let i = 0; i < nums.length; i++) {
        // Inner loop picks the second index j, ensuring i < j
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum is strictly less than target
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }
    
    return count;

// Example usage:
console.log(countPairs([-1, 1, 2, 3, 1], 2)); // Output: 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], 4)); //output: 10
    
};

//solution: using sorting and two pointer approach

var countPairs = function(nums, target) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    
    // Sort the array to use two-pointer technique
    nums.sort((a, b) => a - b);
    
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }
    
    return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // Output: 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], 4)); //output: 10