/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reg = /[^\w]|_/g;
    let sNew = s.toLocaleLowerCase().replace(reg, '');
    let left = 0;
    let right = sNew.length - 1;
    while (left < right) {
        if(sNew[left] === sNew[right]) {
            left ++;
            right --;
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

