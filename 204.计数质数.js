/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const stack = [];
    for (let i = 1; i < n; i++) {
        if (i === 1) {
            continue;
        }
        let flag = true;
        for (let j = 0; j < stack.length && (stack[j] * stack[j] <= i); j++) {
            if(i % stack[j] === 0) {
                flag = false;
                break;
            }            
        }
        if (flag) stack.push(i);
    }
    // console.log('stack', stack)
    return stack.length;
};
// @lc code=end

