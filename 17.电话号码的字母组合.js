/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

 const numberMapLetter =  {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
 };
 
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    return combineOne(numberMapLetter[digits[0]], digits.substring(1));
};

function combineOne(beforeResult, subDigits) {
    if (subDigits.length === 0) {
        return beforeResult;
    } else {
        let firstLetter = subDigits[0];
        const result = numberMapLetter[firstLetter].reduce((pre, cur, index) => {
            return pre.concat(beforeResult.map((item) => {
                return item + cur;
            }));
        }, []);

        return combineOne(result, subDigits.substring(1));
    }
}


// @lc code=end

