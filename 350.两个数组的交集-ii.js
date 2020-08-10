/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const table = {};
    for (let i = 0; i < nums1.length; i++) {
        if (table[nums1[i]]) table[nums1[i]] ++;
        else table[nums1[i]] = 1; 
    }
    const res = [];
    for (let j = 0; j < nums2.length; j++) {
        if (table[nums2[j]]) {
            res.push(nums2[j]);
            table[nums2[j]] --;
        }
    }
    return res;
};
// @lc code=end

