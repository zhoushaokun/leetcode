/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const table = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        table[magazine[i].charCodeAt()-97] ++;
    }
    for (let j = 0; j < ransomNote.length; j++) {
        let res = table[ransomNote[j].charCodeAt() - 97] - 1;
        if (res < 0) return false;
        table[ransomNote[j].charCodeAt()-97] = res;
    }
    return true;
};
// @lc code=end

