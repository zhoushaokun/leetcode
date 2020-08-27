/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let left = a;
    let right = b;
    while (right !== 0) {
        let val = left ^ right;
        let carry = (right & left) << 1;
        left = val;
        right = carry;
    }
    return left;
};
// @lc code=end

