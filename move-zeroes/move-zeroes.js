/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = nums.length-1; i > -1; i--) {
    if (nums[i] === 0) {
      let zero = nums.splice(i,1)[0]
      nums.push(zero)
    } 
  }
  return nums
};