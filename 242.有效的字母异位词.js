/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const table = new Array(128).fill(0);
    if(s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        let ascIndexIns = s.charCodeAt(i);
        let ascIndexInt = t.charCodeAt(i);
        table[ascIndexIns] ++;
        table[ascIndexInt] --;
    }
    return table.every((item) => item === 0);
};
// @lc code=end

