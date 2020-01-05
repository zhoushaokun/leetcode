/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let second = -Number.MAX_VALUE;
    const len = nums.length;
    if (len < 3) {
        return false;
    }
    const stack = [];
    stack.push(nums[len - 1]);
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < second) {
            return true;
        }
        while (stack.length !== 0 && nums[i] > stack[stack.length - 1]) {
            second = Math.max(second, stack.pop());
        }
        //不管栈空还是因为nums[i]>stack[stack.length-1]，都要入栈.
        stack.push(nums[i]);
    }
    return false;
};
// @lc code=end

