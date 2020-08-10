/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    if(!root) return;
    flattenSub(root);
};

function flattenSub(node) {
    let tail = node;
    let temp = node.right;
    if(node.left) {
        tail.right = node.left;
        node.left = null;
        tail = flattenSub(tail.right);
    }
    if(temp) {
        tail.right = temp;
        tail = flattenSub(temp);
    }
    return tail;
}

// @lc code=end

