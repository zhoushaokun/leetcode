/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const len = numbers.length;
    if(len < 2) return [];
    let left = 0;
    let right = len - 1;
    while (left !== right) {
        if(numbers[left] + numbers[right] < target) {
            left ++;
        } else if (numbers[left] + numbers[right] > target)  {
            right --; 
        } else {
            return [left+1, right+1];
        }
    }
    return [];
};
// @lc code=end

