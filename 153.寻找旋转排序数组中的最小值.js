/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /* 
        二分法求解：
        初始化 left、right
        mid = (left+right)>>1;
        如果 nums[mid] > nums[right]
    */
    let left = 0;
    let right = nums.length - 1;
    let mid = (left + right) >> 1;
    while(left < right){
        if(nums[mid] < nums[right]) {
            right = mid;
            mid = (left + right) >> 1;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
            mid = (left + right) >> 1;
        } else {
            right --;
        }
    }
    return nums[left];
};
// @lc code=end

