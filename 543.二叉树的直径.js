/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    const resObj = dfs(root);
    return resObj.diam;
};
/**
 *
 *
 * @param {*} root
 * @param {*} res
 * @returns {arr:Object, index:number}
 */

function dfs(root) {
    let depth = 0;
    let diam = 0;
    if(!root) return {
        depth,
        diam,
    }
    let leftInfo = dfs(root.left);
    let rightInfo = dfs(root.right);
    // 求深度
    depth = Math.max(leftInfo.depth, rightInfo.depth) + 1;
    // 求直径
    diam = Math.max(leftInfo.diam, rightInfo.diam, leftInfo.depth + rightInfo.depth);
    return {
        depth,
        diam,
    };
}

/* function dfs(root) {
    let resObj = {
        arr: [],
        res: [],
    };
    if(!root) return resObj;
    let leftInfo = dfs(root.left);
    let rightInfo = dfs(root.right);
    // 求得res
    if(leftInfo.res.length > rightInfo.res.length) {
        resObj.res = [...leftInfo.res];
    } else {
        resObj.res = [...rightInfo.res];
    }
    // 判断左+根+右是否大于左右的res长度，并求得新的节点的arr为最长的那个数组+root.val
    if (leftInfo.arr.length + rightInfo.arr.length + 1 > resObj.res.length) {
        // return left.push(root.val);
        resObj.res = [...leftInfo.arr, root.val, ...rightInfo.arr];
    }
// 求得arr
    if(leftInfo.arr.length > rightInfo.res.length) {
        resObj.arr = [...leftInfo.arr, root.val];
    } else {
        resObj.arr = [..., ...rightInfo.arr, root.val];
    }
    console.log(resObj.res);
    return resObj;
} */
// @lc code=end

