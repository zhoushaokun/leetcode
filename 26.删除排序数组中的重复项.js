/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 数组去重
    if(!nums.length || nums.length === 1) return nums.length;
    let index = 1;
    let temp = 0;
    while(nums[index] !== undefined) {
        while(nums[temp] === nums[index]) index++;
        if(index - temp > 1) {
            nums.splice(temp, index - temp - 1);
        }
        temp++;
        index = temp+1;
    }
    return index;
};
// @lc code=end

