/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const maxLen = Math.max(num1.length, num2.length);
    num1 = new Array(maxLen - num1.length).fill('0').join('') + num1;
    num2 = new Array(maxLen - num2.length).fill('0').join('') + num2;
    function caculatePlus(left, right, carry) {
        const leftNum = Number(left);
        const rightNum = Number(right);
        const res = leftNum + rightNum + carry;
        return [String(res % 10), Number(res > 9)];
    }
    let carry = 0;
    const res = [];
    for (let i = maxLen - 1; i >= 0 ; i --) {
        let resUnit;
        [resUnit, carry] = caculatePlus(num1[i], num2[i], carry);
        res.unshift(resUnit);
    }
    if (carry) return 1 + res.join('');
    return res.join('');
};

// @lc code=end

