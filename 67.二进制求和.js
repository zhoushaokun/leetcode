/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let carry = 0;
    let index_a = a.length - 1;
    let index_b = b.length - 1;
    let value = 0;
    while (index_a >= 0 || index_b >= 0) {
        value = 0;
        if(index_a >= 0) {
            value = value + Number(a[index_a]);
        }
        if(index_b >= 0) {
            value = value + Number(b[index_b]);
        }
        value = value + carry;
        switch (value) {
            case 0:
                res = '0' + res;
                carry = 0;
                break;
            case 1:
                res = '1' + res;
                carry = 0;
                break;
            case 2:
                res = '0' + res;
                carry = 1;
                break;
            case 3:
                res = '1' + res;
                carry = 1;
                break;
            default:
                break;
        }
        index_a >= 0 && index_a --;
        index_b >=0 && index_b --;
    }
    if(carry === 0) return res;
    return '1' + res;
};
// @lc code=end

