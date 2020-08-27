/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let bottom = 0,
        top = x;
    while( Math.floor(bottom) !== Math.floor(top) ) {
        if ((bottom + top) / 2 * (bottom + top) / 2 > x){
            top = (bottom + top) / 2;
        } else if ((bottom + top) / 2 * (bottom + top) / 2 < x) {
            bottom = (bottom + top) / 2 ;
        } else {
            return Math.floor( (bottom + top) / 2 );
        }
    }

    return Math.floor(bottom);
};
// @lc code=end

