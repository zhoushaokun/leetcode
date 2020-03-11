/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    /* 
        1、递归的做法
            min(p.left, p.right)
     */
    // return searchMinDepthV1(root);
    /* 
        2、BFS 遍历的做法
    */
    if(!root) return 0;
    const stack = [(new Pair(root, 0))];
    let p = null;
    let res = Math.min();
    while(stack.length) {
        p = stack.shift();
        if(p.node.left) {
            stack.push(new Pair(p.node.left, p.depth));
        }
        if(p.node.right) {
            stack.push(new Pair(p.node.right, p.depth));
        }
        if(!p.node.left && !p.node.right) {
            // res = Math.min(res, p.depth);
            return p.depth;
        }
    }
    return res;
};

function Pair(node, depth) {
    this.node = node;
    this.depth = depth;
    if(node) {
        this.depth = depth + 1;
    }
}

function searchMinDepthV1(node) {
    if(!node) {
        return 0;
    }
    if(!node.left && !node.right) {
        return 1;
    }
    if(node.left && node.right) {
        return Math.min(searchMinDepth(node.left), searchMinDepth(node.right)) + 1;
    }
    if(node.left) { // 左节点存在，
        return searchMinDepth(node.left) + 1;
    }
    if(node.right) {
        return searchMinDepth(node.right) + 1;
    }
}
// @lc code=end

