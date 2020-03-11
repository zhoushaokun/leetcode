/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex < 2) return new Array(rowIndex+1).fill(1)
    let res = [1, 1];
    for (let i = 2; i <= rowIndex; i ++) {
        // let mid = [1];
        let temp = res[0]; 
        for (let j = 1; j < i; j++) {
            let cur = res[j];
            res[j] = res[j] + temp;
            temp = cur;
        }
        // mid.unshift(1);
        res.push(1);
        // res = mid;
    }
    return res;
};
// @lc code=end