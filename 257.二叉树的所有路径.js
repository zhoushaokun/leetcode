/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    const res = [];
    const initArr = [];
    binarySubTreePaths(root, initArr, res);
    return res.map( item => item.join("->") );
};
function binarySubTreePaths(node, rootArr, res) {
    rootArr.push(node.val);
    if(node.left) {
        binarySubTreePaths(node.left, [...rootArr], res);
    }
    if(node.right) {
        binarySubTreePaths(node.right, [...rootArr], res);
    }
    if(!node.right && !node.left) {
        res.push([...rootArr]);
    }
}
// @lc code=end

