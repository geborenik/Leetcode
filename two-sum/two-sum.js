/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let res = []
 for (let i = 0; i < nums.length; i++) {
   const operand = target - nums[i]
   const value = nums.indexOf(operand)
   
   if(value !== -1 && value !== i) {
     res.push(i, value)
     break
   }
 }
  return res
};