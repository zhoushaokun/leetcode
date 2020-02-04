/* 
    快速排序：选择基准元素，交换之后，使基准元素的左边小于（大于）基准元素，
            基准元素右边大于（小于）基准元素
    quickSort
    example: [3, 42, 5, 23, 6, 10];
 */
const example = [3, 20, 42, 5, 23, 6, 10, 2, 34, 2333];
const res = mergeSort(example);
console.log('res', res);

function mergeSort(example) {
    let arr = [...example];
    const len = arr.length;
    
    if (!len || len === 1) return arr;
    // 以 2 为倍数递增
    for (let i = 1; i < len; i*=2) {
        // 指定间隔 i 进行 归并排序
        for (let j = 0; j < len; j += i*2) {
            // 确定首尾
            arr = mergeSubSort(arr, j, i);
        }
    }

    return arr;
}

function mergeSubSort(arr, start, gap) {
    const mediumLeft = arr.slice(start, start+gap);
    const mediumRight = arr.slice(start+gap, start+gap*2);

    if(!mediumRight.length) return arr;

    let numLeft = 0;
    let numRight = 0;
    const res = [];
    while (numLeft < gap && numRight < gap && arr[start + gap + numRight]) {
        if (mediumLeft[numLeft] > mediumRight[numRight]) {
            res.push(mediumRight[numRight]);
            numRight ++;
        } else {
            res.push(mediumLeft[numLeft]);
            numLeft ++;
        }
    }
    if (numLeft < gap) {
        res.splice(res.length, 0, ...mediumLeft.slice(numLeft));
    }
    if (numRight < gap) {
        res.splice(res.length, 0, ...mediumRight.slice(numRight));
    }
    arr.splice(start, gap*2, ...res);
    return arr;
}