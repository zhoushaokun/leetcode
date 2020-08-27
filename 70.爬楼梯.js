/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = 0;
    let num = n >> 1;
    while( num >= 0) {
        res += factorial(n - num, num);
        num -- ;
    }
    return res;
};
function factorial(m, k) {
    // m为底，m>=k>=0
    if (k === 0 || m === k) return 1;
    if (k*2 > m) k = m - k;
    let i = 1;
    let res = 1;
    while (i <= k) {
        res = m*res;
        m --;
        i ++;
    }
    while(k >= 1) {
        res = res/k;
        k --;
    }
    return res;
}
// @lc code=end

