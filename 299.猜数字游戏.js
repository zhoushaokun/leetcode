/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const secretArr = secret.split('').map(Number);
    const guessArr = guess.split('').map(Number);
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < guessArr.length; i++) {
        if (secretArr[i] === guessArr[i]) {
            bulls ++;        
            secretArr[i] = -1;
            guessArr[i] = -1;
        }
    }
    for (let i = 0; i < secretArr.length; i++) {
        if (secretArr[i] >= 0) {
            let gusIndex = guessArr.indexOf(secretArr[i]);
            if (gusIndex >=0 ) {
                cows ++;
                guessArr[gusIndex] = -1;
            }
        }
    }
    return `${bulls}A${cows}B`;
};
// @lc code=end

