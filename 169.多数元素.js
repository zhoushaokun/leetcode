/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    const limit = len >> 1;
    const hashTable = {};
    for (let i = 0; i < len; i++) {
        let key = nums[i];
        if( (key) in hashTable) {
            hashTable[key] ++;
            if(hashTable[key] > limit) {
                return key;
            }
        } else {
            hashTable[key] = 1;
        }
    }
    return nums[0];
};
// @lc code=end

