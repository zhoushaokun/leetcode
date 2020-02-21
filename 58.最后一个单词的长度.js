/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/** 
 * @param {string} 
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // // 一般的split
    // const strArr = s.trim().split('');
    // // 不存在最后一个单词，只有一个单词，两个以上单词
    // let index = strArr.length - 1;
    // while(strArr[index] !== undefined) {
    //     if(strArr[index] === ' ') {
    //         break;
    //     }
    //     index --;
    // }
    // return strArr.length - 1 - index;

    // 正则表达式 split
    // const strArr = s.trim().split(/\s+/);
    // return strArr[strArr.length - 1].length;

    // 正则表达式
    const strArr = s.match(/\b[a-zA-Z]+\b/g);
    return strArr === null ? 0 : strArr[strArr.length - 1].length;
};
// @lc code=end

