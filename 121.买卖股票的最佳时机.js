/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 0;
    let res = 0;
    while (right < prices.length) {
        if(prices[right] <= prices[left]) {
            left = right;
        } else {
            res = Math.max(prices[right] - prices[left], res);
        }
        right ++;
    }
    return res;
};
// @lc code=end

