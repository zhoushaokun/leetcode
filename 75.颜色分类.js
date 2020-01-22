/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const arr = new Array(3).fill(0);
  const res = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    arr[nums[i]] ++;
  }
  for (let j = 0; j < arr.length; j++) {
    res.push(...new Array(arr[j]).fill(j));
  }
  return res;
};
let res = sortColors([2, 0, 2, 1, 1, 0]);
console.log('res', res)
// @lc code=end

