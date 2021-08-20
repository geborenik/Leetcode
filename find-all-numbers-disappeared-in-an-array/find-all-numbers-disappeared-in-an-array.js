/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let maxLength = nums.length
    let numsObject = {}
    const res = []
    
    for (let i = 1; i < maxLength+1; i++) {
      numsObject[i] ? ++numsObject[i] : numsObject[i] = 1
    }
  
    nums.forEach(el => {
      numsObject[el] ? ++numsObject[el] : numsObject[i] = 1
    })

    for(let i = 1; i < maxLength+1; i++) {
      if(numsObject[i] === 1) {
        res.push(i)
      }
    }
    return res
};