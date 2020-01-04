/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();
    let num_a;
    for (let i = 0; i < nums.length; i++) {
        num_a = nums[i];

        // 之前人留下的信息有没有适合自己的
        if(m.has(target - num_a)){
            return [i, m.get(target - num_a)];
        }
        // 没有合适自己的就把自己信息留下
        m.set(nums[i], i);
    }
    return [];
};
// @lc code=end

