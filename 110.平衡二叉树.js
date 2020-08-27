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
    const ret = isNodeBalanced(root);
    if(ret >= 0) return true;
    return false;
};
function isNodeBalanced(node) {
    if(!node) return 0;
    const left = isNodeBalanced(node.left);
    const right = isNodeBalanced(node.right);
    if(left < 0 || right < 0) return -1; //短路机制，有一个子树不满足条件就直接返回
    if(Math.abs(left - right) > 1) { //子树高度差多于1，就返回-1
        return -1;
    } else {
        return Math.max(left, right) + 1;
    }
}
// @lc code=end

