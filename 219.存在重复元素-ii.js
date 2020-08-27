/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = i;
        } else {
            if (Math.abs(hashTable[nums[i]] - i) <= k) {
                return true;
            } else {
                hashTable[nums[i]] = i;
            }
        }
    }
    return false;
};
// @lc code=end

