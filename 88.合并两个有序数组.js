/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
// /*  
//     遍历 nums2 中元素，
//         逐个对比 nums1 中元素，直到找到比其小的，并插前边，
//         如果 nums1 遍历完，
//  */
//     let i = 0;
//     let j = 0;
//     for (; i < n; i ++) {
//         while (j < m) {            
//             if(nums2[i] < nums1[j]) {
//                 nums1.splice(j, 0, nums2[i]);
//                 nums1.pop();
//                 j ++;
//                 m ++;
//                 break;
//             }
//             j ++;
//         }
        
//         if (j === m) {
//             nums1[m] = nums2[i];
//             m ++;
//         }
//     }
// };
var merge = function(nums1, m, nums2, n) {
    /* 
        双指针，从后往前排
        1、p1指向nums1最后一个，p2 指向 num2 最后一个，p指向末尾
        2、比较二者大小，大的赋值，并移动对应指针，
    */
    let j = m - 1,
        p = m + n - 1,
        i = n - 1;
    while(i >= 0) {
        if(nums1[j] > nums2[i]) {
            nums1[p --] = nums1[j --];
        } else {
            nums1[p --] = nums2[i --];
        }
    }
};
// @lc code=end

