/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
function Pair(node, sum) {
    this.node = node;
    this.sum = sum;
}
var hasPathSum = function(root, sum) {
    // 中左右的前序遍历
    if(!root) return false;
    let p = null;
    const stack = [new Pair(root, root.val)];
    while(stack.length) {
        p = stack.pop();
        if(!p.node.left && !p.node.right) {
            if(p.sum === sum) {
                return true;
            }
        }
        if(p.node.right) {
            stack.push(new Pair(p.node.right, p.node.right.val+p.sum));
        }
        if(p.node.left) {
            stack.push(new Pair(p.node.left, p.node.left.val+p.sum));
        }
    }
    return false;
};
// @lc code=end

