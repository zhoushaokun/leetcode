/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    // 遍历做法
    let depth = 0;
    let p = null;
    const stack = [];
    stack.push(new Pair(root, depth));
    while(stack.length){
        p = stack.pop();
        if(!p.node) continue;
        depth = Math.max(depth, p.depth);
        stack.push( new Pair(p.node.left, p.depth) );
        stack.push( new Pair(p.node.right, p.depth) );
    }
    return depth;
};

function Pair(node, depth) {
    this.node = node;
    if(node) {
        this.depth = depth + 1;
    }
}

/* 
var maxDepth = function(root) {
    //递归做法 
    return searchDepth(root, 0);
};
function searchDepth(node, depth) {
    if(!node) return depth;
    return Math.max(searchDepth(node.left, depth+1), searchDepth(node.right, depth+1));
}
 */
// @lc code=end

