/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 非递归方法
var isSameTree = function(p, q) {
    const stack_p = [];
    const stack_q = [];
    while(stack_q.length && stack_p.length || (p && q)) {
        while(p){
            stack_p.push(p);
            p = p.left;
        }
        while(q){
            stack_q.push(q);
            q = q.left;
        }
        p = stack_p.pop();
        q = stack_q.pop();
        if(p.val !== q.val) return false;
        p = p.right;
        q = q.right;
    }
    console.log('p, q', p, q)
    if(stack_p.length !== stack_q.length) return false;
    if(!p && q) return false;
    if(p && !q) return false;
    return true;
};

// 递归方法
// var isSameTree = function(p, q) {
//     return validateIfSame(p, q);
// };
// function validateIfSame(p, q) {
//     if(p && !q) return false;
//     if(!p && q) return false;
//     if(!p && !q) return true;
//     if(p.val === q.val) {
//         return validateIfSame(p.left, q.left) && validateIfSame(p.right, q.right);
//     } else {
//         return false;
//     }
// }
// @lc code=end

