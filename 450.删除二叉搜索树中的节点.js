/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */

function Father(node, father) {
    this.node = node;
    this.father = father;
}
var deleteNode = function(root, key) {
    if(!root) return root;
    const stack = [new Father(root, null)];
    let p = null;
    while (stack.length) {
        p = stack.shift();
        if(p.node.val === key) {
            let resHead = afterDeleteNode(p.node);
            if(p.father) {
                if(p.father.left === p.node) {
                    p.father.left = resHead;
                }
                if(p.father.right === p.node) {
                    p.father.right = resHead
                }
            } else {
                root = resHead;
            }
            break;
        }
        if(p.node.left) {
            stack.push(new Father(p.node.left, p.node));
        }
        if(p.node.right) {
            stack.push(new Father(p.node.right, p.node));
        }
    }
    return root;
};

function afterDeleteNode(node) {
    const left = dfs(node.left);
    const right = dfs(node.right);
    const final = [...left, ...right].sort((a,b) => a-b);
    console.log('final', final)
    if(final.length < 1) return null;
    let head = new TreeNode(final[0]);
    let p = head;   
    for (let i = 1; i < final.length; i++) {
        p.right = new TreeNode(final[i]);
        p = p.right;
    }
    return head;
}
function dfs(node) {
    const stack = [];
    let p = node;
    const res = [];
    while(p || stack.length) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        res.push(p.val);
        p = p.right;
    }
    return res;
}
// @lc code=end

