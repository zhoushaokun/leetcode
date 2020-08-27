/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};
// @lc code=end

