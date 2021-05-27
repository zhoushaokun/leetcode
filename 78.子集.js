/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  
  function sonSets(start, [...track]) {
    res.push(track)
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      sonSets(i + 1, track);
      track.pop();
    }
  }
  
  sonSets(0, []);
  return res;
};
// @lc code=end

