/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
function Pair(node, depth) {
    this.node = node;
    this.depth = depth;
}
function getTop(arr) {
    return arr[arr.length - 1];
}
function addDataLevel(p, res) {
    const index = p.depth - 1;
    
    if (res[index] === undefined) {
        res[index] = [p.node.val];
    } else {
        if(p.depth%2 === 0) { // 偶数层要反向
            res[index].unshift(p.node.val);
        } else {
            res[index].push(p.node.val);
        }
    }
}
var zigzagLevelOrder = function(root) {
    // 前序 左中右 深度优先遍历去做
    const res = [];
    const stack = [];
    let p = new Pair(root, 1);
    while((p && p.node) || stack.length) {
        while (p.node) {
            stack.push(new Pair(p.node, p.depth));
            p = new Pair(p.node.left, p.depth + 1);
        }
        p = stack.pop();
        addDataLevel(p, res);
        p = new Pair(p.node.right, p.depth + 1);
    }
    return res;
};
// @lc code=end

