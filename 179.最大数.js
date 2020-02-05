/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // 大顶堆->输出
    const len = nums.length;
    if(!len || len === 1) return nums.toString();
    if( nums.every( item => item ===0 ) ) {
        return '0';
    }
    // 选择排序-》堆排序
    for (let i = (len >> 1) - 1; i >= 0; i--) {
        nums = adjustDown(nums, i, len);
    }
    let res = '';
    for (let i = len - 1; i >= 0; i--) {
        let temp = nums[0];
        nums[0] = nums[i];
        nums[i] = temp;
        res += temp;
        adjustDown(nums, 0, i);
        
    }
    return res;
};

function adjustDown(nums, first, len) {
    // 交换 first 和 len 之间的数
    let temp = 0;
    // 对数组的 first 到 len-1 调整小顶堆
    let child = (first<<1) + 1;
    while (child < len) {
        if (child + 1 < len && judgeWhoBigger(nums[child], nums[child+1]) < 0 ) {
            child ++;
        }
        if (judgeWhoBigger(nums[first], nums[child]) >= 0){ //如已经满足
            break;
        }
        temp = nums[child];
        nums[child] = nums[first];
        nums[first] = temp;
        first = child;
        child = (child<<1) + 1;
    }
    return nums;
}

function judgeWhoBigger(left, right) {
    // 左边大返回正数，右边大返回负数
    return ((left+''+right)-0) - ((right+''+left)-0);
}
// @lc code=end

