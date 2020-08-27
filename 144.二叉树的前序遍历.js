/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    let p = null;
    const stack = [root];
    while (stack.length) {
        p = stack[stack.length - 1];
        stack.pop();
        res.push(p.val);
        if(p.right) {
            stack.push(p.right);
        }
        if(p.left) {
            stack.push(p.left);
        }
    }
    return res;
}
// @lc code=end

