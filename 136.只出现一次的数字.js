/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // for (let i = 0; i < nums.length - 1; i=i+2) {
    //     if(nums[i+1] === nums[i]) continue;
    //     for (let j = i + 2; j < nums.length; j++) {
    //         if(nums[j] === nums[i]) {
    //             let temp = nums[i+1];
    //             nums[i+1] = nums[j];
    //             nums[j] = temp;
    //             break;
    //         }
    //         if(j === nums.length - 1) return nums[i];
    //     }
    // }
    // return nums[nums.length - 1];
    // if(nums.length === 1) return nums[0];
    // nums.sort();
    // let i = 0;
    // let j = 1;
    // while(j < nums.length ) {
    //     if(nums[i] === nums[j]) {
    //         i += 2;
    //         j += 2;
    //     } else {
    //         return nums[i];
    //     }
    // }
    // return nums[i];
    // 异或的做法，以及异或的交换律
    let res = 0;
    for (let  index = 0; index < nums.length; index ++) {
        res = nums[index]^res;
    }
    return res;
};
// @lc code=end

