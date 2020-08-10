/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const biStr = n.toString(2).split("");
    biStr.unshift(...new Array(32 - biStr.length).fill(0));
    let left = 0;
    let right = 31;
    
    while (left < right) {
        let temp = biStr[left];
        biStr[left] = biStr[right];
        biStr[right] = temp;
        left ++;
        right --;    
    }
    return parseInt(biStr.join(""), 2);
};
// @lc code=end

