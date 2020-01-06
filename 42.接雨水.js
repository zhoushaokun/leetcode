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
  // 暴力解法 
  // if(height.length < 3) return 0;
  // let res = 0;
  // for (let i = 1; i < height.length - 1; i++) {
  //   const p = height[i];
  //   let height_left = p;
  //   let height_right = p;
  //   for (let j = i-1; j >= 0; j--) {
  //     height_left = Math.max(height_left, height[j]);
  //   }
    
  //   for (let k = i + 1; k < height.length; k++) {
  //     height_right = Math.max(height_right, height[k]);
  //   }
  //   res += Math.min(height_right, height_left) - p;
  //   console.log('res', res)
  // }
  // return res;

  // 动态编程
  // if(height.length < 3) return 0;

  // let res = 0;

  // let left_max = [];
  // let right_max = [];

  // left_max[0] = height[0];
  // right_max[height.length-1] = height[height.length-1];
  // for (let i = 1; i < height.length - 1; i++) {
  //   left_max[i] = Math.max(left_max[i-1], height[i]);
  // }
  // for (let i = height.length-2; i >= 0; i--) {
  //   right_max[i] = Math.max(right_max[i+1], height[i]);
  // }
  // console.log('left_max, right_max', left_max, right_max)
  // for (let i = 1; i < height.length - 1; i++) {
  //   res += Math.min(left_max[i], right_max[i]) - height[i];
  // }
  // return res;

  //双指针解法 
  if (height.length < 3) return 0;

  let res = 0;
  let left = 1;
  let right = height.length - 2;
  let left_max = height[0];
  let right_max = height[height.length - 1];

  while (left <= right) {
    left_max = Math.max(left_max, height[left]);
    right_max = Math.max(right_max, height[right]);
    
    if(left_max < right_max) {
      res += left_max - height[left ++];
    } else {
      res += right_max - height[right --];
    }
  }
  return res;
};
// @lc code=end

