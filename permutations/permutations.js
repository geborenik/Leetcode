/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutations = []
    
    let findPermutations = function(visited = new Set(), currPerm = []) {
        if (currPerm.length === nums.length) {
            permutations.push(currPerm)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if(!visited.has(i)) {
                findPermutations(new Set([...visited, i]), [...currPerm, nums[i]])
            }
        }
    }
    
    findPermutations()
    
    return permutations;
};