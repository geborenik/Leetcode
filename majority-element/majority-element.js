/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      const obj = {}

  let manyNum = 0

  let manyIndex = 0

  

  for (let i = 0; i < nums.length; i++) {

    obj[nums[i]] ? obj[nums[i]] += 1 :  obj[nums[i]] = 1

  }

  const numsCount = Object.values(obj)

  

  for (let i = 0; i < nums.length; i++) {

    if (numsCount[i] > manyNum) {

      manyNum = numsCount[i]

      manyIndex = i

    }

  }

  return Number(Object.keys(obj)[manyIndex])
};