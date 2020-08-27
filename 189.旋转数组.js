/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const numsLen = nums.length;
    let counter = 0;
    for (let i = 0; counter < numsLen; i ++) {
        let temp = 0;
        let pre = nums[i];
        let start = i;
        let mid = start;
        do {
            let next = (mid + k) % (numsLen);
            temp = nums[next];
            nums[next] = pre;
            pre = temp;
            mid = next;
            counter ++;
        } while(mid !== start);
    }
    return nums;
};
// @lc code=end

