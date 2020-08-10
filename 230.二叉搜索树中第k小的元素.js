/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let p = root;
    const stack = [];
    let counter = 0;
    while (p || stack.length) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        counter ++;
        if(counter === k) {
            return p.val;
        }
        p = p.right;
    }
};
// @lc code=end

