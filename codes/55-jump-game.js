/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Method 1: DP
var canJump = function(nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxJump < i) return false;
    maxJump = Math.max(maxJump, nums[i] + i);
    if (maxJump > nums.length - 1) return true;
  }
  
  return true;
};