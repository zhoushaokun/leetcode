/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
// BFS的做法
var levelOrder = function(root) {
    if(!root) return [];
    const stack = [root];
    const res = [];
    let num = 1;
    let counter = 0;

    let oneLayer = [];
    while (stack.length) {
        let p = stack.shift();
        num --;
        oneLayer.push(p.val);
        if(p.left) {
            stack.push(p.left);
            counter ++;
        }
        if(p.right) {
            stack.push(p.right);
            counter ++;
        }
        if(num === 0) {
            num = counter;
            counter = 0;
            res.push(oneLayer);
            oneLayer = [];
        }
    }
    return res;
};

// DFS 的做法，给每个节点标志一个深度
// @lc code=end

