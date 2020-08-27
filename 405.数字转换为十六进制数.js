/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const map = new Map([[10, 'a'], [11, 'b'], [12, 'c'], [13, 'd'], [14, 'e'], [15, 'f']]);
    const maxLen = 32;

    function get16Num(a) {
        if (a < 10) return a + '';
        return map.get(a);
    }
    function getB(numStr) {
        const numArr = numStr.split('');
        numArr.shift();
        if (numArr.length === maxLen) return numArr.join('');
        numArr.unshift(...(new Array(maxLen - 1 - numArr.length).fill('0')));
        const reverse = parseInt(
            numArr.map(i => i === '1' ? 0 : 1).join(''), 2) + 1;
        return '1' + reverse.toString(2);
    }

    let numStr = num.toString(2);
    if (num < 0) {
        numStr = getB(numStr)
    }
    let res = '';
    for (let i = numStr.length; i > 0; i -= 4) {
        const begin = (i - 4 >= 0) ? i - 4 : 0;
        const unitNum = parseInt(numStr.slice(begin, i), 2);       
        res = get16Num(unitNum) + res;
    }
    return res;
};
// @lc code=end

