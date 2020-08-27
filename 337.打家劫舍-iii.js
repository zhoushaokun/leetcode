/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
    const [isRoot, res] = maxRob(root);
    return res;
};
function maxRob(node) {
    if(!node) return [false, 0];
    let isRoot = false;
    let res = node.val;
    if(!node.left && !node.right) return [true, res];
    const [isLeftRoot, left] = maxRob(node.left);
    const [isRightRoot, right] = maxRob(node.right);

    if(isLeftRoot && isRightRoot) { //都是相邻
        if (res <= left + right) {
            res = left + right;
            isRoot = false;
        } else {
            isRoot = true;
        }
    }
    if(isLeftRoot && !isRightRoot) { //左相邻 右间隔
        if(res + right > left + right) {
            res = res + right;
            isRoot = true;
        } else {
            res = left + right;
            isRoot = false;
        }
    }
    if(!isLeftRoot && isRightRoot) { //左间隔 右相邻
        if(res + left > left + right) {
            res = res + left;
            isRoot = true;
        } else {
            res = left + right;
            isRoot = false;
        }
    }
    if(!isLeftRoot && !isRightRoot) { //左右都间隔
        let num1 = left + right;
        let num2 = res + left;
        let num3 = res + right;
        let max = Math.max(num1, num2, num3);
        if(num3 === max) {
            res = num3;
            isRoot = false;
        } else if(num2 === max) {
            res = num2;
            isRoot = true;
        } else {
            res = num1;
            isRoot = true;
        }
    }
    console.log('isRoot, res', isRoot, res)
    return [isRoot, res];
}
// @lc code=end

