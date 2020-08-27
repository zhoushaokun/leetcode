/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vac = ['a', 'e', 'i', 'o', 'u'];
    let left = 0;
    let right = s.length - 1;
    if (right <= 0) return s;
    const sArr = s.split('');
    while (left < right) {
        while(!isYuan(vac, sArr[left]) && left < right) left ++;
        while (!isYuan(vac, sArr[right]) && left < right ) right --;
        if (left < right) {
            swap(sArr, left ++, right --);
        }
    }
    return sArr.join('');
};
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function isYuan(vac, char) {
    char = char.toLowerCase();
    let mid = vac.length >> 1;
    let left = 0;
    let right = vac.length;
    while (left < right) {
        if(char.charCodeAt() < vac[mid].charCodeAt()) {
            right = mid - 1;
            mid = (left + right) >> 1;
        } else if (char.charCodeAt() > vac[mid].charCodeAt()) {
            left = mid + 1;
            mid = (left + right) >> 1;
        } else {
            break;
            return true;
        }
    }
    return vac[mid] === char;
}
// for (let i = 0; i < 26; i++) {
//     const res = isYuan(vac, String.fromCharCode(97+i));
//     console.log('res', String.fromCharCode(97 + i), res)
// }
// @lc code=end

