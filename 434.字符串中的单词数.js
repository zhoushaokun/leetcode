/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 正则表达式的做法
var countSegments = function(s) {
    const res = s.match(/^[^\s]|\s[^\s]/g);
    if (res) return res.length;
    return 0;
};
// 逐个遍历的方法
// var countSegments = function(s) {
//     let counter = 0;
//     let flag = false;
//     for (let i = 0; i < s.length; i ++) {
//         if (s[i] !== ' ' && !flag) flag = true;
//         if (s[i] === ' ' && flag) {
//             counter ++;
//             flag = false;
//         }
//     }
//     if (flag) counter ++;
//     return counter;
// };
// @lc code=end

