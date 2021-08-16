/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1
  }
  const kv = Object.entries(obj)
  const res = kv.filter(el => el[1] === 1 && el)
  return Number(res[0][0])
};