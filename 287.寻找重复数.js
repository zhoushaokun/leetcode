/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // 二分查找
    const len = nums.length;
    let left = 1;
    let right = len - 1;
    let mid = 0;
    let counter = 0;
    while (left < right) {
        mid = left + ((right- left)/2);
        for (let i = 0; i < len; i++) {
            if(nums[i] < mid) {
                counter ++;
            }
        }
        if(counter >= mid) { //在[left, mid)
            right = Math.floor(mid);
        } else { //在[mid, right]
            left = Math.ceil(mid);
        }
        counter = 0;
    }
    return left;
};

// @lc code=end

