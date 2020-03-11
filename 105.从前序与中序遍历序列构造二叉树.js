/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function Pair(node, begin, end) {
    this.node = node;
    this.begin = begin;
    this.end = end;
}
function Node(val) {
    this.left = this.right = null;
    this.val = val;
}
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    const stack = [];
    let root = new Node(preorder.shift());
    let nodePair = new Pair(root, 0, inorder.length - 1);
    stack.push(nodePair);
    while (stack.length) {
        // nodePair = stack.pop();
        // console.log(nodePair.begin, nodePair.end);
        // rootIndex = inorder.indexOf(nodePair.node.val);
        nodePair = stack[stack.length - 1];
        let rootIndex = inorder.indexOf(nodePair.node.val);
        while(rootIndex > nodePair.begin) {
            let leftNode = new Node(preorder.shift());
            nodePair.node.left = leftNode;
            stack.push(new Pair(leftNode, nodePair.begin, rootIndex - 1));
            rootIndex = inorder.indexOf(leftNode.val);
            nodePair = stack[stack.length - 1];
        }
        nodePair = stack.pop();
        rootIndex = inorder.indexOf(nodePair.node.val);
        if (nodePair.end > rootIndex) {
            let rightNode = new Node(preorder.shift());
            nodePair.node.right = rightNode;
            stack.push(new Pair(rightNode, rootIndex + 1, nodePair.end));
        } else {
            nodePair.node.right = null;
        }
    }
    return root;
};
buildTree([3, 1, 2, 4], [1, 2, 3, 4]);
// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  */
// var buildTree = function(preorder, inorder) {
//     return buildSubTree(preorder, inorder);
// };
// function Node(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
// function buildSubTree(preorder, inorder){
//     if(!inorder.length) return null;
//     const rootIndexIninorder = inorder.indexOf(preorder[0]);
//     const rootNode = new Node(preorder[0]);
//     // preorder.splice(0, 1);
//     preorder.shift();
//     rootNode.left = buildSubTree(preorder, inorder.slice(0, rootIndexIninorder));
//     rootNode.right = buildSubTree(preorder, inorder.slice(rootIndexIninorder+1));
//     return rootNode;
// }
// const res = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// console.log('res', res)
// @lc code=end

