/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // 采用中序遍历的方法，第一个前面大于后边的 前面节点值
    // 第二个 前面大于后边的 后边节点值 
    // 相互交换
    if(!root) return root;
    let temp = null;
    let second = null;
    let inorder = {
        left: null,
        right: null,
        val: Math.max(),
    };
    let m = 0;
    let p = root;
    const stack = [];
    while(stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }

        p = stack.pop();
        if(p.val <= inorder.val) {
            if(!temp) {
                temp = inorder;
                second = p;
            } else {
                second = p;
            }
        }
        inorder = p;
        
        p = p.right;
    }
    if(temp && second) {
        m = second.val;
        second.val = temp.val;
        temp.val = m;
    }
    return root;
};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;    
// }

// function Tree(arr) {
//     const root = new TreeNode(arr[0]);
//     let stack = [root];
//     for (let i = 1; i <= (arr.length>>1); i*=2) {
//         let mid = [];
//         for (let j = 0; j < stack.length; j++) {
//             let index = (i - 1 + j) * 2 + 1;
//             if (arr[index] !== null) {
//                 stack[j].left = new TreeNode(arr[index]);
//                 mid.push(stack[j].left);
//             }
//             if (arr[index+1]) {
//                 stack[j].right = new TreeNode(arr[index+1]);
//                 mid.push(stack[j].right);
//             }
//         }

//         stack = mid;
//     }
//     return root;
// }
// const tree = new Tree([3, 1, 4, null, null, 2]);
// const res = recoverTree(tree);
// console.log('res', res)
// @lc code=end

