/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort((a,b) => a-b);
    let left = 0;
    let right = 0;
    let nums = 0;
    while (right < A.length) {
        while (A[left] === A[++ right]) {
            // nums ++;
            A[right] = A[right] + 1;
        }
        // console.log('left, right', left, right, A)
        left ++;
        right = left;
    }
    return nums
};
// @lc code=end

