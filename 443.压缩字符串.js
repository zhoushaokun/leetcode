/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let lastForBegin = 0;
    for (let i = 0; i < chars.length; i++) {
        let counter = 1;
        while (chars[i] === chars[i + 1]) {
            i += 1;
            counter += 1;
        }
        chars[lastForBegin] = chars[i];
        lastForBegin += 1;
        if (counter === 1) continue;
        const counterStr = String(counter);
        for (let j = 0; j < counterStr.length; j++) {
            chars[lastForBegin] = counterStr[j];
            lastForBegin += 1;
        }
    }
    chars.length = lastForBegin;
};
// @lc code=end

