/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length === 0) return 0;
    if(heights.length === 1) return heights[0];
    if(heights.length === 2) return Math.min(heights[0], heights[1])*2;
    // 每个都相左向右
    let left = 0;
    let right = 0;
    let res = 0;
    for (let i = 1; i < heights.length - 1; i++) {
        left = right = i;
        while(1) {
            if (left - 1 >= 0 && heights[left - 1] >= heights[left]) {
                left--;
            } else if (right + 1 < heights.length && heights[right + 1] >= heights[right]) {
                right++;
            } else {
                res = Math.max(res, (right - left + 1) * Math.min(heights[left], heights[right])); 
                break;
            }
        }
        console.log('left, right', left, right)
    }
    return res;
};
largestRectangleArea([2, 1, 5, 6, 2, 3]);
// @lc code=end

