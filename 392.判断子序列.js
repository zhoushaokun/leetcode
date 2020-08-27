/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;

    while (sIndex >= 0 && tIndex >= 0) {
        if (s[sIndex] === t[tIndex]) {
            sIndex --;
        } 
        tIndex --;
    }
    return sIndex < 0;
};
// @lc code=end

