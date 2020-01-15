/* 
核心：最小的那个数像泡泡一样出现在开头
 */
function bubbleSort(nums) {
  const len = nums.length;
  // const mediumNums = nuns.slice(0);
  const mediaNums = [...nums];
  let temp = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (mediaNums[j] > mediaNums[j+1]) { // 从小到大排序
        temp = mediaNums[j];
        mediaNums[j] = mediaNums[j+1];
        mediaNums[j+1] = temp;
      }
    }
  }
  return mediaNums;
}

bubbleSort([3,4,4,2,37,7,8,16,12]);