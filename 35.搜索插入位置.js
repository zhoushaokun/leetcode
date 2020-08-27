/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    if(len === 0) {
        nums.push(target);
        return 0;
    }
    if (target < nums[0]) {
        nums.unshift(target);
        return 0;
    }
    if (target > nums[len-1]) {
        nums.push(target);
        return len;
    }
    let top = len - 1,
        bottom = 0,
        mid = (top + bottom) >> 1;
    while (mid !== bottom) {
        if(target > nums[mid]) {
            bottom = mid;
        } else if(target < nums[mid]) {
            top = mid;
        } else {
            return mid;
        }
        mid = (top + bottom) >> 1;
    }

    if(target > nums[mid]) {
        nums.splice(mid, 0, target)
        return mid+1;
    } else {
        return mid;
    }

};

/* 
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while(left <= right) {
            int mid = (left + right) / 2;
            if(nums[mid] == target) {
                return mid;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}
*/
// @lc code=end

