/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const sets1 = new Set(nums1);
    const sets2 = new Set(nums2.filter((value) => sets1.has(value)));
    return [...sets2];
};
// @lc code=end

