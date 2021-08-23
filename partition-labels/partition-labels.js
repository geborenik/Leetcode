/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let obj = {}
  const stringlength = [0]
  const res = []
  
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]].push(i) : obj[s[i]] = [i]
  }
  
  const alphabets = Object.keys(obj)
  let divisonPoint = obj[alphabets[0]][obj[alphabets[0]].length-1]
  

  for (let i = 1; i < alphabets.length; i++){
    const firstIndex = obj[alphabets[i]][0]
    const lastIndex = obj[alphabets[i]][obj[alphabets[i]].length-1]

    if (lastIndex > divisonPoint && firstIndex > divisonPoint) {
      stringlength.push(firstIndex)
      divisonPoint = lastIndex
    } else if (lastIndex > divisonPoint && firstIndex < divisonPoint){
      divisonPoint = lastIndex
    } 
  }
  stringlength.push(s.length)
  
  for (let i = 0; i < stringlength.length-1; i++) {
    
    res.push(stringlength[i+1] - stringlength[i])
  }
  
  return res
};