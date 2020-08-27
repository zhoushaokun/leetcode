/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {

    // 层次遍历，每次要保存一个层次的节点，为下次遍历做准备，
    // 当一个层次的所有节点.left或者 right 为 null,那么结束
    if(!root) return [];
    const res = [];
    let nodes = [root],
        nodesDep = null,
        resDep = null;
    while (true) {
        nodesDep = [];
        resDep = [];
        for (let i = 0; i < nodes.length; i++) {
            if(nodes[i]) {
                resDep.push(nodes[i].val);
            }
            if(nodes[i].left) {
                nodesDep.push(nodes[i].left);
            }
            if(nodes[i].right) {
                nodesDep.push(nodes[i].right);
            }
        }
        res.unshift(resDep);
        if(!nodesDep.length) break;
        nodes = nodesDep;
    }
    return res;
};
// @lc code=end

