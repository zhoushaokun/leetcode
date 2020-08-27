/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // 迭代的层次遍历做法
    
};


// 递归的先序遍历做法
// var sumNumbers = function(root) {
//     return sumSub(root, 0);    
// };
// function sumSub(node, lastVal) {
//     if(!node) return lastVal;
//     let ret = 0;
//     let newValue = lastVal*10 + node.val;
//     if(!node.left && !node.right) return newValue;
//     if(node.left) {
//         ret += sumSub(node.left, newValue);
//     }
//     if(node.right) {
//         ret += sumSub(node.right, newValue);
//     }
//     return ret;
// }
// @lc code=end

