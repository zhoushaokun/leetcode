/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return biOneCounterV3(n);
};

function biOneCounterV3(n) {
    let counter = 0;
    while( (n&(n-1) ) !== 0){
        counter ++;
        n = n & (n - 1);
    }
    return counter+1;
}

function biOneCounterV2(n) {
    let res = 0;
    let flag = 1;
    for (let i = 1; i <= 32; i++) {        
        if((n&flag) !== 0) {
            res ++;
        }
        flag = flag << 1;
    }
    return res;
}

function biOneCounterV1(n) {
    let biStr = '';
    let carryFlag = false;
    if (n >= 0) {
        biStr = Number(n).toString(2);
    } else {
        biStr = Number(~(-n)).toString(2);
        carryFlag = true;
    }
    // console.log(biStr);
    let i = biStr.length - 1;
    let counter = 0;
    while (biStr[i] !== undefined) {
        if (carryFlag) {
            if (biStr[i] === '1') {
                carryFlag = true;
            } else {
                carryFlag = false;
                counter++;
            }
        } else {
            if (biStr[i] === '1') {
                counter++;
            }
        }
        i--;
    }
    if (carryFlag) {
        counter++;
    }
    return counter;
}
// @lc code=end

