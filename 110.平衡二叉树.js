/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    /* 
        迭代方法：求取子树长度同时，判断子树是否符合平衡二叉树

     */
    const ret = isNodeBalanced(root);
    if(ret >= 0) return true;
    return false;
};
function isNodeBalanced(node) {
    if(!node) return 0;
    let left = isNodeBalanced(node.left);
    let right = isNodeBalanced(node.right);
    if(left < 0 || right < 0) return -1;
    left ++;
    right ++;
    if(Math.abs(left-right) > 1) {
        return -1;
    } else {
        return Math.max(left, right);
    }
}
// @lc code=end

