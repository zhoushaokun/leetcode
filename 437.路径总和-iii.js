/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, sum) {
    // 类似二数之和
    if(!root) return 0;
    return findProperInSub(root, [], sum);
};
function findProperInSub(node, [...path], sum) {
    // 首先 hash table 中是否存在合适的
    // 没有的话，首先遍历每个 table 条目，每个条目添加 item
    let nums = 0;
    let tempSum = node.val;
    if(tempSum === sum) nums++;
    for (let i = path.length - 1; i >= 0; i --) {
        tempSum += path[i];
        if(tempSum === sum) {
           nums ++;
        }
    }
    path.push(node.val);
    if(node.left) {
        nums += findProperInSub(node.left, path, sum);
    }
    if(node.right) {
        nums += findProperInSub(node.right, path, sum);
    }
    return nums;
}
// @lc code=end

