/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.cache = new Array(nums.length);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let index = j + 1;
    if (this.cache[j] === undefined) {
        index = i;
    }
    if(this.cache[i] === undefined) {
        while (this.cache[index] === undefined && index > 0) index --;
    }
    while (index <= j) {
        if (index === 0) this.cache[index] = this.nums[0];
        else {
            this.cache[index] = this.cache[index - 1] + this.nums[index];
        }
        index ++;
    }
    if (i === 0) return this.cache[j];
    return (this.cache[j] - this.cache[i - 1]);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

