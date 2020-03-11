/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function getTop(arr) {
    return arr[arr.length - 1];
}
var generate = function(numRows) {
    if(numRows < 3) return new Array(numRows).fill([]).map((item, index) => new Array(index+1).fill(1));
    const res = [
        [1],
        [1, 1],
    ];
    for (let i = 2; i < numRows; i ++) {
        let lastRow = getTop(res);
        res.push([]);
        let row = getTop(res);
        row.push(1);
        for (let j = 1; j < i; j ++) {
             row.push(lastRow[j - 1] + lastRow[j]);           
        }
        row.push(1)
    }
    return res;
};

// console.log('generate(2)', generate(3));
// @lc code=end

// function newFun(creator) {
//     if(typeof creator !== 'function') throw new Error('creator type error');
//     let obj = {};
//     obj.__proto__ = creator.prototype;
//     let res = creator.call(obj, ...arguments.slice(1));
//     if(res !== null && (typeof res === 'Object'||typeof res === 'function') ) {
//         return res;
//     }
//     return obj;
// }

// function create(o) {
//     const F = function () { };
//     F.prototype = o;
//     let _obj = new F();
//     return _obj;
// }