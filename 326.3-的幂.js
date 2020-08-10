/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    const res = parseInt(Number(n).toString(3).slice(1)) === 0
        && Number(n).toString(3)[0] === '1';
    return res;
};
// @lc code=end

