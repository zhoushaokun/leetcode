/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

 /* 同构克隆的方法 */
var generateTrees = function(n) {
    if(n === 0) return [];
    const map = {};
    return generateSubTree(1, n, map);
};
function generateSubTree(start, end, map) {
    const key = start+'_'+end;
    if(map[key]) return map[key];
    if(end - start < 1) {
        map[key] = startEndDiff2(start, end);
        return map[key];
    }
    const res = [];

    for (let i = start; i <= end; i++) {
        let leftRes = generateSubTree(start, i-1, map);
        let rightRes = generateSubTree(i + 1, end, map);
        for (let k = 0; k < leftRes.length; k++) {
            for (let j = 0; j < rightRes.length; j++) {
                let node = new TreeNode(i);
                node.left = leftRes[k];
                node.right = rightRes[j];
                res.push(node);
            }
        }
    }

    map[key] = res;
    return res;
}
function startEndDiff2(start, end) {
    if(start > end) return [null];
    if(start === end) return [new TreeNode(start)];
}
generateTrees(0);
// @lc code=end

