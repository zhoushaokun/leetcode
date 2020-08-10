/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
// var connect = function(root) {
//     // 层次优先遍历，队列
//     if(!root) return root;
//     const stack = [root];
//     let nums = 0;
//     let counter = 1;
//     while (stack.length) {
//         p = stack.shift();
//         counter --;
//         if(p.left) {
//             nums ++;
//             stack.push(p.left);
//         }
//         if(p.right) {
//             nums ++;
//             stack.push(p.right);
//         }
//         if(counter === 0) {
//             counter = nums;
//             nums = 0;
//             p.next = null;
//         } else {
//             p.next = stack[0];
//         }
//     }
//     return root;
// };
var connect = function(root) {
    // 递归
    if(!root) return root;
    root.next = null;
    connectSub(root.left, root.right);
    return root;
};
function connectSub(left, right) {
    if(!left) return;
    left.next = right;
    connectSub(left.left, left.right);
    connectSub(left.right, right.left);
    connectSub(right.left, right.right);
}
// @lc code=end

