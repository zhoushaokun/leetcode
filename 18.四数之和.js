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
    const nums = [...nums_o].sort();
    let twoSum = new Map();
    for (let i = 0; i < nums.length; ) {
        while (nums[i] === nums[++i]) {}
        for (let j = i + 1; j < nums.length; j++) {
            while (nums[j] === nums[++j]) {}
            twoSum.set([i, j], nums[i]+nums[j]);
        }
    }

    let m = {};
    let res = [];
    for (const [key, value] of twoSum) {
        if(m[target-value]) {
            
        } else {
            m[value] = key;
        }
    }
};
// @lc code=end

