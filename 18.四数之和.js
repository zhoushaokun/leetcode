/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums_o
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums_o, target) {
    if (nums_o.length < 4) return [];
    const nums = [...nums_o].sort((a, b) => a - b);
    console.log('nums', nums)
    let twoSum = new Map();
    let res = [];

    for (let i = 0; i < nums.length; ) {
        for (let j = i + 1; j < nums.length; ) {
            twoSum.set([i, j], nums[i]+nums[j]);
            while (nums[j] === nums[++j]) { }
        }
        while (nums[i] === nums[++i]) { }
    }

    console.log('twoSum', twoSum);
    
    for (const [key, value] of twoSum) {
        for (const [key_s, value_s] of twoSum) {
            if(value + value_s === target && new Set([...key_s, ...key]).size === key.length + key_s.length) {
                res.push([...key_s, ...key]);
            }
        }
    }
    return res;
};
// @lc code=end

