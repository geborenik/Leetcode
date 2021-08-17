/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = []
  let arr = []
  const bin = (num) => {
  if (num === 0 || num === 1) {
    arr.unshift(num%2)
  } else {
    arr.unshift(num%2)
    num = Math.floor(num/2)
    bin(num)
  }  
}
  
  for (let i = 0; i < n+1; i++) {
    bin(i)
    res.push(arr)
    arr = []
  }
  const bits = res.map((el)=>{
  const one = el.reduce((acc, cur)=>{
  return acc + cur
},0)
  return one
})
  return bits
};