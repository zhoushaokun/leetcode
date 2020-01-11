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
    let left = 0;
    let right = 0;
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        left = right = i;
        while(1) {
            if (left - 1 >= 0 && heights[left - 1] >= heights[i]) {
                left--;
            } else if (right + 1 <= heights.length && heights[right + 1] >= heights[i]) {
                right++;
            } else {
                res = Math.max(res, (right - left + 1) * heights[i]); 
                break;
            }
        }
    }
    return res;
};
// @lc code=end

