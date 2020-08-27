/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // return validateSubTree(root);
    if(!root) return true;
    // 先序遍历
    const stack = [];
    let inorder = Math.max();
    let p = root;
    while (stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }

        p = stack.pop();
        if(p.val <= inorder) return false;
        inorder = p.val;
        // 如果有右边节点，则先push进去，再pop出来
        p = p.right;
    }
    return true;
};

/* 递归做法 */
// var isValidBST = function (root) {
//     return validateSubTree(root);
// }
// function validateSubTree(treeNode, upper, lower) {
//     if (!treeNode) return true;
//     const val = treeNode.val;

//     if (upper !== undefined &&  val >= upper) return false; 
//     if (lower !== undefined &&  val <= lower) return false;
    
//     return validateSubTree(treeNode.left, val, lower) && validateSubTree(treeNode.right, upper, val);
// }


// @lc code=end

