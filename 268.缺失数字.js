/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const temp = [...nums];
    temp.push(-1);
    let i = 0;
    while (i < temp.length) {
        while (i !== temp[i] && temp[i] !== -1) {
            swap(i, temp[i], temp);
        }
        i ++;
    }
    return temp.indexOf(-1);
};
function swap(i, j, nums) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
// @lc code=end

