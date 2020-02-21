/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;
    while(index >= 0) {
        if (digits[index] + 1 === 10) {
            digits[index] = 0;
            index --;
        } else {
            digits[index] += 1;
            break;
        }
    }
    if(index === -1) {
        digits.unshift(1);
    }
    return digits;
};
// @lc code=end

