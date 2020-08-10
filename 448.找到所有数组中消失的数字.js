/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const targetIndex = Math.abs(nums[i]) - 1;
        if (nums[targetIndex] > 0) {
            nums[targetIndex] = -nums[targetIndex];
        }
    }
    const res = [];
    nums.forEach((n, i) => {
        if (n > 0) res.push(i + 1);
    });
    return res;
};
// @lc code=end

