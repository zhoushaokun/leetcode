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

    const stack = [-1];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        if (stack.length === 1 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
        } else {
            let a = stack[stack.length-1];
            while (stack.length > 1 && heights[i] < heights[a]){
                res = Math.max(res, heights[i]*(i-a+1));
                stack.pop();
                a = stack[stack.length - 1];
            }
            res = Math.max(res, heights[a]*(i-a+1)) ;
        }
    }
    while(stack.length > 1) {
        res = Math.max(res, heights[stack.pop()] * (i - stack[stack.length-1] + 1));
    }
    
    return res;
};
// @lc code=end

