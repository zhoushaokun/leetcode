/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const table = new Map();
    let miner = -1;
    nums.forEach((cur, index) => {
        if (cur < miner) {
            miner = cur;
        }
        if (table.has(cur)) {
            const indexArr = table.get(cur);
            indexArr.push(index);
        } else {
            table.set(cur, [index]);
        }
    });
    
    let counter = 0;
    while (table.get(miner).length === 0) {
        counter ++;
        const indexArr = table.get(miner);
        
    }
};
// @lc code=end

