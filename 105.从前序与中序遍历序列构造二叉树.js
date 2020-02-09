/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return buildSubTree(preorder, inorder);
};
function Node(val) {
    this.val = val;
    this.left = this.right = null;
}
function buildSubTree(preorder, inorder){
    if(!inorder.length) return null;
    const rootIndexIninorder = inorder.indexOf(preorder[0]);
    const rootNode = new Node(preorder[0]);
    preorder.splice(0, 1);
    rootNode.left = buildSubTree(preorder, inorder.slice(0, rootIndexIninorder));
    rootNode.right = buildSubTree(preorder, inorder.slice(rootIndexIninorder+1));
    return rootNode;
}
// const res = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// console.log('res', res)
// @lc code=end

