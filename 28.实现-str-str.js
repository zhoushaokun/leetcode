/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === undefined) return -1;
    // var reg = new RegExp(needle);
    // return haystack.search(reg);
    return haystack.indexOf(needle);
};
// @lc code=end

