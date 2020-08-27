/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(sStr, tStr) {
    let hashMap = {};
    for (let i = 0; i < sStr.length; i++) {
        if (sStr.charAt(i) in hashMap) { // 存在于键上
            if (hashMap[sStr.charAt(i)] !== tStr.charAt(i)) return false;
        } else {
            if (Object.values(hashMap).indexOf(tStr.charAt(i)) > -1) {
                return false;
            } else {
                hashMap[sStr.charAt(i)] = tStr.charAt(i);
            }
        }
    }
    return true;
};
// isIsomorphic("egg", 'aa')
// var isIsomorphic = function(sStr, tStr) {
//     let hashMap = {};
//     for (let i = 0; i < tStr.length; i++) {
//         if (tStr.charAt(i) in hashMap) {
//             if (sStr.charAt(i) !== hashMap[tStr.charAt(i)]) return false;
//         } else {
//             hashMap[tStr.charAt(i)] = sStr.charAt(i);
//         }
//     }
//     hashMap = {};
//     for (let i = 0; i < sStr.length; i++) {
//         if (sStr.charAt(i) in hashMap) {
//             if (tStr.charAt(i) !== hashMap[sStr.charAt(i)]) return false;
//         } else {
//             hashMap[sStr.charAt(i)] = tStr.charAt(i);
//         }
//     }
//     return true;
// };
// @lc code=end

