/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /* 
        找出其中不含有重复字符的 最长子串的 长度。
        1、快慢指针 pb,pt，保存最大长度 maxLen;
        2、初始化，pb pt,满足 s[p1] !== s[p2]
        3、每次迭代 pt++
            如果不存在重复继续并比较 maxLen 与 ph-pl
            如果重复，从pb从重复的元素后第一个开始
    */
    // const len = s.length;
    // if(!len || len === 1) return len;
    // let pt = 0,
    //     pl = 0,
    //     maxLen = 1,
    //     mid = 0;
    // do {
    //     mid = s.slice(pl, pt + 1).indexOf(s[pt+1]);
    //     if(mid > -1) {
    //         pl = mid + 1 + pl;
    //     }
    //     pt ++;
    //     maxLen = Math.max(maxLen, pt - pl + 1);
    // } while(pt < len - 1);
    // return maxLen;

    
    /* 
        捅优化
        new 一个长 128 且全是-1的数组 hashTable
        for end++;
            if end > hashTable[s.charCodeAt(end)], 
                if  大于 start 
                    start = start+hashTable[s.charCodeAt(end)] +1
                end标记进去，        
    */
    const hashTable = new Array(128).fill(-1);
    const len = s.length;
    let start = 0,
        end = 0,
        maxLen = 0,
        charCode = 0;
    for ( ; end < len; end ++) {
        charCode = s.charCodeAt(end);
        if(end > hashTable[charCode]) {
            if(start < hashTable[charCode] + 1) {
                start = hashTable[charCode] + 1;
            }
            hashTable[charCode] = end;
        }
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
};
// @lc code=end

