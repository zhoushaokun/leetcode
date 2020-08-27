/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 递归
    return invertSubTree(root);
};

function invertSubTree(node) {
    if(!node) return null;
    let temp = node.right;
    node.right = invertSubTree(node.left);
    node.left = invertSubTree(temp);
    return node;
}
// @lc code=end

