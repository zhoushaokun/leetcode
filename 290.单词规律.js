/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    // 采用 hashtable 双向映射
    const patArr = pattern.split('');
    const strArr = str.split(' ');
    if (patArr.length !== strArr.length) return false;
    const hash = {};
    const prefix = '_';
    let res = true;
    for (let i = 0; i < patArr.length; i++) {
      const temp = prefix+patArr[i];
      const tempRev = strArr[i];
      if (!hash[temp]) {
        hash[temp] = tempRev;
      }
      if (!hash[tempRev]) {
        hash[tempRev] = temp;
      }
      if (hash[temp]) {
        res = hash[temp] === tempRev && res;
      }
      if (hash[tempRev]) {
        res = hash[tempRev] === temp && res;
      }
      if (!res) return false;
      console.log('hash', hash)
    }
    return res;
};
// @lc code=end

