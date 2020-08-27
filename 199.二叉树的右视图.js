/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
//方法一：深度优先遍历，但是每次只保存每层的数据
// 方法二：广度优先遍历
var rightSideView = function(root) {
// 返回树的每一层最右边的数据,层次优先遍历
    if(!root) return [];
    let p = null;
    const stack = [root];
    let counter = 1;
    let nums = 0;
    const res = [];
    while (stack.length) {
        p = stack.shift();
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
            res.push(p.val);
            counter = nums;
            nums = 0;
        }
    }
    return res;
};
// @lc code=end

