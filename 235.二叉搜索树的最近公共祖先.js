/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 借助二叉排序树的特点，p和q不能同时在一颗子树上
    // 等价于 p、q不能同时都大于或者小于节点值
    return searchIfAncestor(root, p, q);
};
// 第一次想出的方法
function searchIfAncestor(node, p, q) {
    if(!node) return null;
    if(node === p) return node;
    if(node === q) return node;
    let leftRes = searchIfAncestor(node.left, p, q);    
    let rightRes = searchIfAncestor(node.right, p, q);
    if(leftRes && rightRes) {
        return node;
    }
    if(leftRes) return leftRes;
    if(rightRes) return rightRes;
}

// @lc code=end

