/* 
    快速排序：选择基准元素，交换之后，使基准元素的左边小于（大于）基准元素，
            基准元素右边大于（小于）基准元素
    quickSort
    example: [3, 42, 5, 23, 6, 10];
 */
const example = [3, 42, 5, 23, 6, 10];
const res = quickSort(example);
console.log('res', res);

function quickSort(arr) {
    const len = arr.length;
    if(!len || len === 1) return arr;
    let baseI = 0;
    let temp = 0;
    let rightToLeftFlag = true;
    for (let i = 1, j = len - 1; i < j; ) {
        if(rightToLeftFlag) {
            if(arr[j]<arr[baseI]){
                temp = arr[j];
                arr[j] = arr[baseI];
                arr[baseI] = temp;
                baseI = j;
                rightToLeftFlag = !rightToLeftFlag;
            } else {
                j--;
            }
        } else {
            if (arr[i] > arr[baseI]) {
                temp = arr[i];
                arr[i] = arr[baseI];
                arr[baseI] = temp;
                baseI = i;
                rightToLeftFlag = !rightToLeftFlag;
            } else {
                i++;
            }
        }
    }
    return [...quickSort(arr.slice(0, baseI)), arr[baseI], ...quickSort(arr.slice(baseI+1))];
}