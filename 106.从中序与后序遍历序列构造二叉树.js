/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return buildSubTree(inorder, postorder);
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function buildSubTree(inorder, postorder) {
    if(!inorder.length) return null;
    
    const len = postorder.length;
    const rootNode = new TreeNode(postorder[len-1]);
    const rootIndexIninorder = inorder.indexOf(postorder[len-1]);
    postorder.splice(len-1, 1);
    rootNode.right = buildSubTree(inorder.slice(rootIndexIninorder+1), postorder);
    rootNode.left = buildSubTree(inorder.slice(0, rootIndexIninorder), postorder);
    
    return rootNode;
}
// @lc code=end

