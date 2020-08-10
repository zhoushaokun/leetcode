/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) return false;
    if (num === 1) return true;
    const intergers = [2, 3, 5];
    for (let i = 0; i < intergers.length; i++) {
        while (num % intergers[i] === 0) {
            num = num / intergers[i];
            if(num === 1) return true;
        }
    }
    return false;
};
// @lc code=end

