/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    /* 
        1、先确定一个一维数组
            通过每个数组首元素确定 matrix[i]<=k<matrix[j]
            说明在第i个数组
    */
    if(matrix.length === 0) return false;
    if(matrix[0].length === 0) return false;
    const cols = matrix.map( (item) => item[0] );
    let colInfo = null;
    cols.push( top(top(matrix)) );

    colInfo = midSearch(cols, target);
    if(colInfo.findFlag) {
        return true;
    }
    if(colInfo.index < 0) return false;
    return midSearch(matrix[colInfo.index], target).findFlag;
};


/**
 *
 *
 * @param {Array} nums
 * @param {Number} target
 * @return {Object}
 * 如果 直接找到，返回 {
 *  findFlag: true,
 * }
 * 否则 {
 *  findFlag: flase,
 *  index:start,
 * }
 */
function midSearch(nums, target) {
    if(target<nums[0] || target>top(nums)) return {
        findFlag: false,
        index: -1,
    }
    let start = 0,
        end = nums.length - 1,
        mid = (start + end) >> 1;
    while (end >= start ) {
        if (target > nums[mid]) {
            start = mid + 1;
            mid = (start + end) >> 1;
        } else if(target < nums[mid]) {
            end = mid - 1;
            mid = (start + end) >> 1;
        } else  {
            return {
                findFlag: true,
            };
        } 
    }
    return {
        findFlag: false,
        index: start - 1,
    };
}

function top(arr) {
    return arr[arr.length - 1];
}
// @lc code=end

