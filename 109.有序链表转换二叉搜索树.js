/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {


    let len = 0;
    let p = {};
    p.next = head;
    while(p){
        p = p.next;
        len = len + 1;
    }
    p = head;
 
    const buildBST = (start, end) => {
        if (start > end) {
            return null;
        }
        const left = buildBST(start, ((end -1 - start) >> 1));
        node = new TreeNode(p.val);
        node.left = left;
        p = p.next;
        node.right = buildBST(((end - 1 - start) >> 1) + 1, end - 1);
        return node;
    };
    return buildBST(0, len-1);
};

// @lc code=end

