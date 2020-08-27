/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();
    let num_a;
    for (let i = 0; i < nums.length; i++) {
        num_a = nums[i];

        // 之前人留下的信息有没有适合自己的
        if(m.has(target - num_a)){
            return [i, m.get(target - num_a)];
        }
        // 没有合适自己的就把自己信息留下
        m.set(nums[i], i);
    }
    return [];
};
// @lc code=end


function getIntersection(...spans) {
    /* 代码实现 */
    return spans.reduce((lastResult, span) => {
        return getSame(lastResult, span);
    });

    function getSame(spanA, spanB) {
        if (spanA === null || spanB === null) return null;
        spanA.sort((a, b) => a - b);
        spanB.sort((a, b) => a - b);
        if (Math.min(...spanA) > Math.max(...spanB) || Math.min(...spanB) > Math.max(...spanA)) {
            return null;
        }
        const end = Math.min(spanA[1], spanB[1]);
        const start = Math.max(spanA[0], spanB[0]);
        return [start, end];
    }
}

const res = getIntersection([5, 2], [4, 9], [3, 6]);
console.log('res', res)