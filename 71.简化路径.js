/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const path_arr = Array.from(new Set(path.split('/')))
  let stack = [];
  
  for (let i = 0; i < path_arr.length; i++) {
    if(path_arr[i] === '.' && path_arr[i+1] === '.'){
      i++;
      stack.pop();
    } else if (path[i] === '.' && path[i+1] !== '.') {
      continue;
    } else {
      stack.push(path_arr[i]);
    }
  }

  return stack.join('/');
};
// @lc code=end

