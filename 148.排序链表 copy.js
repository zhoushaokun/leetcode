/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    // 增加头结点
    let headPre = {
        next: head,
        val: Math.min,
    }; 

    let pre = headPre;
    let len = 1;
    while(!!(pre=sortSubList(pre, len))) {
        // 合并
        while(pre) {
            pre = sortSubList(pre, len);
        }
        pre = headPre;
        len = len << 1;
    }
    return headPre.next;
};

// 两个链表 p1 p2 按从小到大重新链接
function sortSubList(preNode, len) {
    const head = preNode;
    let p1 = preNode.next;
    let p2 = preNode.next;
    // 长度不够 len，直接返回，不用合并
    for (let i = 0; i < len; i++) {
        if(!p2) return null;
        p2 = p2.next;
    }
    let num1 = 0,
        num2 = 0;
    while(num1 < len && num2 < len  && p2) {
        
        if(p1.val < p2.val) {
            preNode.next = p1;
            p1 = p1.next;
            num1++;
        } else {
            preNode.next = p2;
            p2 = p2.next;
            num2++;
        }
        preNode = preNode.next;
    }
    // ☆☆☆☆☆练习出错地方☆☆☆☆☆
    // 当 p1 链表还有剩余，则将其链在preNode后，
    // 由于 要么 p1 还有剩余，要么 p2 还有剩余，
    // p1 剩余时比较特殊，需要将 p2 的尾结点链在后边
    if (num1 < len){
       preNode.next = p1;
       while(num1 < len){
           preNode = preNode.next;
           num1++;
       }
       preNode.next = p2;
    }
    
    if (num2 < len && p2) {
        preNode.next = p2;
        while (num2 < len && preNode) {
            preNode = preNode.next;
            num2++;
        }
    }
    
    return preNode;
}
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// function init(arr) {
//     let head = new ListNode(arr[0]);
//     p = head;
//     for (let i = 1; i < arr.length; i++) {
//         p.next = new ListNode(arr[i]);
//         p = p.next;
//     }
//     p = null;
//     return head;
// }

// function end(head) {
//     let p = head;
//     const res = [];
//     while(p){
//         res.push(p.val);
//         p = p.next;
//     }
//     return res;
// }

// const list = init([-1, 5, 3, 4, 0]);
// const res = sortList(list);
// console.log('res', end(res))
// @lc code=end

