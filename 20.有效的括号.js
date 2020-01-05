/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} 
 * @return {boolean}
 */

 const map = {
    '}': '{',
    ']': '[',
    ')': '(',
 };
 
var isValid = function(s) {
    const sArr = s.split("");
    if (sArr.length%2 !== 0) return false;
    let stack = [sArr[0]];
    for (let i = 0; i < sArr.length; i++) {
        const c = sArr[i];
        if(map[c] === stack[stack.length-1]) {
            stack.pop();
        } else {
            stack.push(c);
        }
        console.log('stack', stack)
    }
    return stack.length === 0;
};
// @lc code=end

