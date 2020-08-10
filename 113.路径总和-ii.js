/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
function Pair(node, arr) {
    this.node = node;
    this.arr = [...arr];
}
var pathSum = function (root, sum) {
    const res = [];
    if (!root) return res;
    pathSumSub(root, [], 0);

    function pathSumSub(node, lastArr, lastSum) {
        let newArr = null;
        if (node.val + lastSum === sum && !node.left && !node.right) {
            res.push([...lastArr, node.val]);
        } else {
            newArr = [...lastArr, node.val];
            if (node.left) {
                pathSumSub(node.left, newArr, node.val + lastSum);
            }
            if (node.right) {
                pathSumSub(node.right, newArr, node.val + lastSum);
            }
        }
    }
    return res;
};
// @lc code=end

