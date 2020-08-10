/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    const stack = [root];
    let counter = 1;
    let nums = 0;
    while (stack.length) {
        let p = stack.shift();
        counter --;
        if(p.left) {
            stack.push(p.left);
            nums ++;
        }
        if(p.right) {
            stack.push(p.right);
            nums ++;
        }
        if(counter === 0) {
            p.next = null;
            counter = nums;
            nums = 0;
        } else {
            p.next = stack[0];
        }
    }
    return root;
};
// @lc code=end

