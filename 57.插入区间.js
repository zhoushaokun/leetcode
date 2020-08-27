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
    if (!intervals.length) return [newInterval]; 
    const MAX_LEN = Math.max(newInterval[1], intervals[intervals.length - 1][1]);
    let arr = new Array(MAX_LEN).fill(false);
    let insertNum = -1;

    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals[i][1]-intervals[i][0] + 1; j++) {
            arr[intervals[i][0]+j] = true;
        }
    }
    if (newInterval[1] === newInterval[0] && !arr[newInterval[1]]) {
        insertNum = newInterval[0];
    } else {
        for (let j = 0; j < newInterval[1] - newInterval[0]; j++) {
            arr[newInterval[0] + j] = true;
        }
    }
    const res = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            if (insertNum >= 0 && insertNum < i &&( res.length === 0 || (insertNum > res[res.length - 1][1] ) ) ) {
                res.push([insertNum, insertNum]);
            }
            j = i;
            while(arr[++ j]){ }
            res.push([i, j]);
            i = j;
        }
    }
    return res;
};
insert([[0, 1], [5, 5], [6, 7], [9, 11]], [12, 21]);
// @lc code=end

