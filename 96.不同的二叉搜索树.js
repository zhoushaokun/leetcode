/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let table = [];
    table[0] = 1;
    table[1] = 1;
    let i = 2;
    while (i <= n) {
        let mid = 0;
        for (let j = 1; j <= i; j++) {
            mid += table[i - j]*table[j - 1];
        }
        table[i] = mid;
        i += 1;
    }
    return table[n];
};
// @lc code=end

