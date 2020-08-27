/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    // const maxCoin = Math.max(...coins); 
    // let bigToe = Math.floor(amount / maxCoin) - 1;
    // if (bigToe > 0) {
    //     amount = amount - bigToe * maxCoin;
    // } else {
    //     bigToe = 0;
    // }

    const dp = new Array(amount+1).fill(amount+1);
    for (let i = 0; i < coins.length; i++) {
        dp[coins[i]] = 1;
    }
    for (let i = 1; i < amount + 1; i ++) {
        // dp[i] = dp[amount - i] + 1;
        for (const coin of coins) {
            if(i < coin) continue;
            dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }
    return dp[amount] === amount+1 ? -1 : dp[amount];
};
// @lc code=end

