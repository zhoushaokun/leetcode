/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
        let mid = (left + right) >> 1;
        let guessVal = guess(mid);
        if (guessVal > 0) {
            left = mid + 1;
        } else if (guessVal < 0 ) {
            right = mid  - 1;
        } else {
            return mid;
        }
        console.log('mid', mid)
    }
    return left;
};
// @lc code=end
