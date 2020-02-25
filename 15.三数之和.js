/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
    a + b = -c
*/
var threeSum = function(nums) {
    const result = [];
    const len = nums.length;
    let first = 0,
        last = 0,
        sum3 = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 1; i ++) {
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        first = i + 1;
        last = len - 1;
        while(first < last) {
            sum3 = nums[first] + nums[last] + nums[i];
            if (sum3 === 0) {
                result.push([nums[i], nums[first], nums[last]]);
            }
            if (sum3 <= 0) { //数小，fist向右
                while (first < last && nums[first] === nums[first + 1]) {
                    first ++;
                }
                first ++;
            } else {
                while (first < last && nums[last] === nums[last - 1]) {
                    last --;
                }
                last --;
            }
        }
    }
    return result;
};
// @lc code=end

