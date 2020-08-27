/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    function printStr (n){
        const numArr3 = n.toString(3);
        const numTail3 = numArr3[numArr3.length - 1];
        const numArr5 = n.toString(5);
        const numTail5 = numArr5[numArr5.length - 1]
        if (numTail3 === '0' && numTail5 === '0') return 'FizzBuzz';
        if (numTail3 === '0') return 'Fizz';
        if (numTail5 === '0') return 'Buzz';
        return n.toString();
    }
    const res = [];
    for (let i = 1; i <= n; i++) {
        res.push(printStr(i));
    }
    return res;
};
fizzBuzz(15);
// @lc code=end

