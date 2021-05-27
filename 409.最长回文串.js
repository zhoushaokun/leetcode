/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hash = new Map();
  const sArr = s.split('');
  let res = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (hash.has(sArr[i])) hash.set(sArr[i], hash.get(sArr[i]) + 1)
    else hash.set(sArr[i], 1);    
  }
  for (const [key, value] of hash) {
    let num = (value >> 1) << 1;
    res += num;
    if (res % 2 === 0 && value % 2 === 1) {
      res += 1;
    }
  }
  return res;
};
// @lc code=end

