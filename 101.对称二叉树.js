/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 非递归
var isSymmetric = function (root) {
    const queue = [root, root];
    while(queue.length){
        p = queue.pop();
        q = queue.pop();
        if(!p && !q) continue;
        if(!p || !q) return false;
        if(p.val !== q.val) return false;
        queue.push(p.left);
        queue.push(q.right);
        queue.push(p.right);
        queue.push(q.left);
    }
    return true;
};

/* 递归
var isSymmetric = function (root) {
   return isMirror(root, root);
};
function isMirror(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    return (p.val === q.val) &&
        isMirror(p.left, q.right) &&
        isMirror(p.right, q.left);
}
 */
// @lc code=end

