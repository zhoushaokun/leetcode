/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    const stack = [];
};
/* function sumOfLeftSub(node, ifLeft) {
    if(!node) return 0;
    let sum = 0;
    if(node.left) {
        sum += sumOfLeftSub(node.left, true); 
    }
    if(node.right) {
        sum += sumOfLeftSub(node.right, false);
    }
    if(!node.left && !node.right && ifLeft) {
        sum += node.val;
    }
    return sum;
} */
// @lc code=end

