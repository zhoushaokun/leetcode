/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const numsLen = nums.length;
    if(numsLen === 0) return 0;
    if(numsLen < 3) return Math.max(...nums);
    let i = numsLen - 1;
    let state = [Math.max(nums[i], nums[i-1]), nums[i]];
    i -= 2;
    do {
        let next = state.pop();
        let mid = state.pop();
        let pre = nums[i];
        if(next + pre > mid) {
            state.push(next + pre, mid);
        } else {
            state.push(mid, mid);
        }
        i --;
    } while(i >= 0);
    return Math.max(...state);
};
// @lc code=end

