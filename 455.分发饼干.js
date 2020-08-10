/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, sCookie) {
    g.sort((a, b) => b - a);
    sCookie.sort((a, b) => b - a);
    let indexer = 0;
    for (let i = 0;(i < g.length) && (indexer < sCookie.length); i++) {
        if (sCookie[indexer] >= g[i]) {
            indexer ++;
        }
    }
    return indexer;
};
// @lc code=end

