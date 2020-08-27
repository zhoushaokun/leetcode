/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    // 因为可能有两次访问的过程，头一次先push，
    // 而第二次pop时才开始遍历
    const set = new Set();
    let p = null;
    while (stack.length) {
        p = stack[stack.length - 1];
        let leftVisited = true;
        let rightVisited = true;
        if (p.right && !set.has(p.right)) {
            leftVisited = false;
            stack.push(p.right);
        }
        if(p.left && !set.has(p.left)) {
            rightVisited = false;
            stack.push(p.left);
        }
        if(leftVisited && rightVisited) {
            res.push(p.val);
            set.add(p);
            stack.pop();
        }
    }
    return res;
};
// @lc code=end

