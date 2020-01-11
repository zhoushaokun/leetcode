/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals = intervals.sort((a, b) => {
        return a[0]-b[0];
    });
    const res = [intervals[0]];
    let a = res[res.length - 1];
    for (let i = 1, len = intervals.length; i < len; i++) {
        a = res[res.length - 1];
        if(intervals[i][0] <= a[1]){
            res.pop();
            res.push([Math.min(a[0], intervals[i][0]), Math.max(intervals[i][1], a[1])]);
        } else {
            res.push(intervals[i]);
        }
    }
    return res;
};
// @lc code=end

