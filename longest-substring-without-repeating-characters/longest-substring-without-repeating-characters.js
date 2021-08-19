/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = []
    let subString
    let res = 0
    
    if (s === '') {
      return res
    } else {
      for (let i = 0; i < s.length; i++) {
        if (subString) {
          if(subString.includes(s[i])) {
            arr.push(subString)
            i -= subString.length
            subString = undefined
          } else {
            if (i === s.length - 1) {
            subString += s[i]
            arr.push(subString)
          } else {
            subString += s[i]
          }
          }
        } else {
          if (i === s.length - 1) {
            subString = s[i]
            arr.push(subString)
          } else {
            subString = s[i]
          }
        }
      }
      res = arr.reduce((acc,cur)=>{
      return acc.length > cur.length ? acc : acc = cur
      })
    }
    return res.length
};