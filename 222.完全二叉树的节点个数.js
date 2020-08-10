/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
function Pair(node, num) {
    this.node = node;
    this.num = num;
}
 
var countNodes = function(root) {
    if(!root) return 0;
    let p = new Pair(root, 1);
    let stack = [p];
    while (stack.length) {
        p = stack.shift();
        if(p.node.left) {
            stack.push(new Pair(p.node.left, p.num*2));
        } else {
            return 2*p.num - 1;
        }
        if(p.node.right) {
            stack.push(new Pair(p.node.right, p.num*2 + 1));
        } else {
            return 2*p.num;
        }
    }
};
// @lc code=end

