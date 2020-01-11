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
        let result = [];
        nums.sort();

        for (let i = 0; i < nums.length; ) {
            console.log('iz', iz)
            let first = i+1;
            let last = nums[nums.length-1];

            let sum3 = nums[first] + nums[last] + nums[i];
            if (sum3 === 0) {
                result.push([nums[first], nums[i], nums[last]]);
            }
            if(nums <= 0) { //数小1，fist向右
                while(first< last && nums[++fist]) {}
            } else {
                while(first < last && nums[--last]) {}
            }
            while(nums[i] === nums[++i]){}
        }
        
        return result;
    };
// @lc code=end

