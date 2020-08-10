/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num = n;
    let arr = [];
    while (num !== 1) {
        if(arr.indexOf(num) < 0) {
            arr.push(transNum(num));
        } else {
            return false;
        }
        let res = 0;
        while (num !== 0) {
            res += Math.pow(num % 10, 2);
            num = Math.floor(num / 10);
        }
        num = res;
    }
    return true;
};
function transNum(num) {
    const r = num.toString().split("").map(Number).sort().join("");
    return Number(r);
}
// @lc code=end

