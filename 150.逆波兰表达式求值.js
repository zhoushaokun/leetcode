/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
function getTop(arr) {
    return arr[arr.length - 1];
}
function ifSign(data) {
    return data === '+'
        || data === '-'
        || data === '*'
        || data === '/';
}
function computeValue(sign, a, b) {
    let res;
    switch (sign) {
        case '+':
            res = a + b;
            break;
    
        case '-':
            res = a - b;
            break;
    
        case '*':
            res = a * b;
            break;
    
        case '/':
            res = Math.floor(Math.abs(a / b));
            if( b * a < 0) res = -res;
            break;

        default:
            break;
    }
    return res;
}
var evalRPN = function(tokens) {
    const stackSign = [];
    const stackValue = [];
    const stackFlag = [];
    while(tokens.length > 1 || stackSign.length) {
        if(ifSign(getTop(tokens))){
            stackSign.push(tokens.pop());
            stackFlag.push(false);
        } else {
            stackValue.push(Number(tokens.pop()));
            if(getTop(stackFlag)) { // 说明可以计算
                stackFlag.pop();
                let sign = stackSign.pop();
                let firstValue = stackValue.pop();
                let secondValue = stackValue.pop();
                tokens.push(computeValue(sign, firstValue, secondValue));
            } else {
                stackFlag[stackFlag.length - 1] = true;
            }
        }
    }
    return tokens[0];
};
evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]);
// @lc code=end

