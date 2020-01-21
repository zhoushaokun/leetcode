/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const len = intervals.length;
    if (!len) return [newInterval];
    const res = [];
    let i = 0;
    for (; i < len; i++) {
        if(newInterval[0]<intervals[i][0]) {
            addOrUpdate(res, newInterval);
            break;
        } else {
            addOrUpdate(res, intervals[i]);
        }
    }
    if(i === len) {
        addOrUpdate(res, newInterval);
    } else {
        for (; i < len; i++) {
            addOrUpdate(res, intervals[i]);
        }
    }
    return res;
};

function addOrUpdate(res_a, newInterval) {
    const len_a = res_a.length;
    if(len_a === 0) {
        res_a.push(newInterval);
    } else {
        if(res_a[len_a-1][1] >= newInterval[0]){
            const a = res_a.pop();
            res_a.push([a[0], Math.max(newInterval[1], a[1])]);   
        } else {
            res_a.push(newInterval);
        }
    }
}
// @lc code=end

