/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    let mid = (left + right) >> 1;
    while (left < right) {
        if (mid * mid > num) right = mid - 1;
        if (mid * mid < num) left = mid + 1;
        if (mid * mid === num) return true;
        mid = (left + right) >> 1;
    }
    return mid * mid === num;
};
// @lc code=end

