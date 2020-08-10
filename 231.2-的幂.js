/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) return false;
    if (n < 0) return false;
    return (n & (n - 1)) === 0;
};
// var isPowerOfTwo = function(n) {
//     let num = n;
//     if(num === 0) return false;
//     while (num !== 1) {
//         if(num % 2 !== 0) return false;
//         num = num >> 1;
//     }
//     return true;
// };
// var isPowerOfTwo = function(n) {
//     let current = 1;
//     if(n === 1) return true;
//     while (current < n) {
//         if (2 * current === n) {
//             return true;
//         } else {
//             current = 2 * current;
//         }
//     }
//     return false;
// };
// @lc code=end

