/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 取偶数个数的左边元素为根节点
    return buildBST(nums);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildBST(nums) {
    const len = nums.length;
    if(!len) return null;
    const rootIndex = len>>1;
    const rootNode = new TreeNode(nums[rootIndex]);

    rootNode.left = buildBST(nums.slice(0, rootIndex));
    rootNode.right = buildBST(nums.slice(rootIndex+1));
    return rootNode;
}
// @lc code=end

