/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
  if(height.length < 3) return 0;
  let res = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const p = height[i];
    let height_left = p;
    let height_right = p;
    for (let j = i-1; j >= 0; j--) {
      height_left = Math.max(height_left, height[j]);
    }
    
    for (let k = i + 1; k < height.length; k++) {
      height_right = Math.max(height_right, height[k]);
    }
    res += Math.min(height_right, height_left) - p;
    console.log('res', res)
  }
  return res;
    
};
// @lc code=end

