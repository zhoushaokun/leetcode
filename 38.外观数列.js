/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let arr = ['1'];
    let mid = [];
    let i = 1;
    while (i < n) {
        mid.length = 0;
        let left = 0;
        let right = 0;
        while (arr[right] !== undefined) {
            while (arr[left] === arr[right]) right++;
            mid.push(String(right-left), arr[left]);
            left = right;
        }
        arr = [...mid];
        i ++;
    }
    return arr.join('');
};
countAndSay(4);
// @lc code=end

