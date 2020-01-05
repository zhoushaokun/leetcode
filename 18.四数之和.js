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

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; ) {
            twoSum.set([i, j], nums[i]+nums[j]);
            while (nums[j] === nums[++j]) { }
        }
        while (nums[i] === nums[++i]) { }
    }
    
    console.log('twoSum', twoSum);
    
    for (const [key, value] of twoSum) {
        for (const [key_s, value_s] of twoSum) {
            if(res.indexOf([...key, ...key_s].sort().join(",")) > -1) {
                continue;
            }
            if(value + value_s === target && new Set([...key_s, ...key]).size === key.length + key_s.length) {
                res.push([...key, ...key_s].sort().join(","));
            }
        }
    }

    console.log('res', res);
    return res.map((item) => {
        let item_a = item.split(",").map(item => Number(item));
        console.log('item_a', item_a);
        return [nums[item_a[0]], nums[item_a[1]], nums[item_a[2]], nums[item_a[3]]];
    });
};

// @lc code=end

