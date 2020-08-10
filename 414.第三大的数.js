/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = nums[0];
    if (nums[1] !== undefined) {
        first = nums[1] > nums[0] ? nums[1] : nums[0];
        second = nums[1] < nums[0] ? nums[1] : nums[0];
    }

    function optArr(arr, item) {
        function sortArr(a, insIdx) {
            for (let j = insIdx; j > 0; j --) {
                if (a[j] > a[j - 1]) {
                    let temp = a[j];
                    a[j] = a[j - 1];
                    a[j - 1] = temp;
                }
            }
        }
        const iOfUnde = arr.indexOf(undefined);
        if (iOfUnde > -1) {
            arr[iOfUnde] = item;
            sortArr(arr, iOfUnde);
        } else {
            arr[3] = item;
            sortArr(arr, 3);
        }
        arr.length = 3;
    }

    const arr = new Array(3).fill(undefined);

    for (let i = 0; i < nums.length; i++) {
        if (arr.indexOf(nums[i]) < 0) {
            optArr(arr, nums[i]);
        }
    }
    return arr[2] === undefined ? arr[0] : arr[2];
};
// @lc code=end

