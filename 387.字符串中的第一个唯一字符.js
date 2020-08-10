/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const stack = [];
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const charIndex = s[i].charCodeAt() - 97;
        if (table[charIndex] === 0) {
            stack.push(i);
        }
        table[charIndex] ++;        
    }
    for (let j = 0; j < stack.length; j++) {
        const charIndex = s[stack[j]].charCodeAt() - 97;
        if (table[charIndex] === 1) return  stack[j];       
    }
    return -1;
};
// @lc code=end

