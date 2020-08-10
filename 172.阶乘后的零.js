/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let nums = Math.pow(5, Math.floor(Math.log(n) / Math.log(5)));
    let res = 0;
    while (nums >= 5) {
        res += Math.floor(n/nums);
        nums = nums/5
    }
    return res;
};
// @lc code=end

