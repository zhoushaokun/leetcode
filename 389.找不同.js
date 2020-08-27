/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const sCharIndex = s[i].charCodeAt() - 97;
        const tCharIndex = t[i].charCodeAt() - 97;

        table[sCharIndex] --;
        table[tCharIndex] ++;
    }
    table[t[t.length-1].charCodeAt()-97] ++;
    return String.fromCharCode(table.indexOf(1)+97);
};
// @lc code=end

