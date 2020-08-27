/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const transtor = 26;
    let res = '';
    while (n > 0) {
        if(n % transtor === 0) {
            res = String.fromCharCode(64 + transtor) + res;
            n = Math.floor(n / transtor) - 1;
        } else {
            res = String.fromCharCode(64 + n % transtor) + res;
            n = Math.floor(n / transtor);
        }
        console.log('res', res, n)
    }
    return res;
};
// @lc code=end

