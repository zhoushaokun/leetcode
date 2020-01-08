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
  const path_arr = path.split('/').filter(item => !!item);
  if(path_arr.length === 0) return '/';
  let stack = [];  
  for (let i = 0; i < path_arr.length; i++) {
    if(path_arr[i] === '..'){
      stack.pop();
    } else if (path_arr[i] === '.') {
      continue;
    } else {
      stack.push(path_arr[i]);
    }
   
  }
  return '/'+(stack.join('/'));
};

// @lc code=end

