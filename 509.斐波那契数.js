/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N === 0 || N === 1) return N;
    let an_1 = 0,
        an_2 = 1,
        res = 0;
    for (let i = 2; i <= N; i++) {
        res = an_1 + an_2;
        an_1 = an_2;
        an_2 = res;
    }
    return res;
};
/* 
function subFib(n){
    if(n === 0 || n === 1) return n;
    return subFib(n - 1) + subFib(n - 2);
}
 */
// @lc code=end

