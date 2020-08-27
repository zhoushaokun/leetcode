/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    const stack = [];
    const res = [];
    let p = root;
    while (p || stack.length) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        res.push(p.val);
        p = p.right;
    }
    return res;
};
// @lc code=end

