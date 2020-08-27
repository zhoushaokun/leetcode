/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2);
};
// 直观计算法3
// var arrangeCoins = function(n) {
//     const cal = k => k*(k+1)/2;
//     let res = -1;
//     let counter = 0;
//     while (res <= n) {
//         counter ++;
//         res = cal(counter);
//     }
//     return counter - 1;
// };
// @lc code=end

