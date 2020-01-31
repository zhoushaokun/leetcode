/* 
    快速排序：选择基准元素，交换之后，使基准元素的左边小于（大于）基准元素，
            基准元素右边大于（小于）基准元素
    quickSort
    example: [3, 42, 5, 23, 6, 10];
 */
const example = [3, 20, 42, 5, 23, 6, 10];
const res = fn(example);
console.log('res', res);

// function quickSort(arr) {
//     const len = arr.length;
//     if(!len || len === 1) return arr;
//     let baseI = 0;
//     let temp = 0;
//     let rightToLeftFlag = true;
//     for (let i = 1, j = len - 1; i < j; ) {
//         if(rightToLeftFlag) {
//             if(arr[j]<arr[baseI]){
//                 temp = arr[j];
//                 arr[j] = arr[baseI];
//                 arr[baseI] = temp;
//                 baseI = j;
//                 rightToLeftFlag = !rightToLeftFlag;
//             } else {
//                 j--;
//             }
//         } else {
//             if (arr[i] > arr[baseI]) {
//                 temp = arr[i];
//                 arr[i] = arr[baseI];
//                 arr[baseI] = temp;
//                 baseI = i;
//                 rightToLeftFlag = !rightToLeftFlag;
//             } else {
//                 i++;
//             }
//         }
//     }
//     return [...quickSort(arr.slice(0, baseI)), arr[baseI], ...quickSort(arr.slice(baseI+1))];
// }

// function quickStackSort(arr) {
//     const len = arr.length;
//     if (!len || len === 1) return arr;
//     let base = arr[0];
//     // let temp = 0;

//     let i = 0,
//         j = len-1;
//     while (i < j) {
//         while(arr[j] >= base && i<j) j--;
//         if (i < j) { //小值前移
//             arr[i++] = arr[j];
//         }
//         while(arr[i] <= base && i<j) i++;
//         if (i < j) { //大值后移
//             arr[j--] = arr[i];
//         }
//     }
//     arr[i] = base;
    
//     return [...quickStackSort(arr.slice(0, i)), base, ...quickStackSort(arr.slice(i+1))];
// }
// 使用递归做的快速排序
function quickSortRecurse(arr) {
    const len = arr.length;
    if (!len || len === 1) return {
        arr,
    };
    let base = arr[0];
    // let temp = 0;

    let i = 0,
        j = len - 1;
    while (i < j) {
        while (arr[j] >= base && i < j) j--;
        if (i < j) { //小值前移
            arr[i++] = arr[j];
        }
        while (arr[i] <= base && i < j) i++;
        if (i < j) { //大值后移
            arr[j--] = arr[i];
        }
    }
    arr[i] = base;

    return [...quickSort.slice(0, i), arr[i], ...quickSort(i+1)];
}

/* 
1、完成基本的快速排序
2、构造节点 Pair：{firsr, second}
3、使用栈 stack 保存每次迭代的结果
 */
function quickSort(arr) {
    const len = arr.length;
    if (!len || len === 1) return {
        arr,
    };
    let base = arr[0];
    // let temp = 0;

    let i = 0,
        j = len-1;
    while (i < j) {
        while(arr[j] >= base && i<j) j--;
        if (i < j) { //小值前移
            arr[i++] = arr[j];
        }
        while(arr[i] <= base && i<j) i++;
        if (i < j) { //大值后移
            arr[j--] = arr[i];
        }
    }
    arr[i] = base;
    
    return {
        arr,
        baseIndex: i,
    };
}

function Pair(first, second) {
    this.first = first;
    this.second = second;
}

// 使用迭代和栈实现的快速排序
function quickStackSort(arr) {
    const example = [...arr];
    let stack = [];
    stack.push(new Pair(0, example.length-1));
    while(stack.length){
        const ele = stack.pop();
        const res = quickSort(example.slice(ele.first, ele.second+1));
        if(res.arr){
            res.baseIndex = res.baseIndex + ele.first;
            example.splice(ele.first, ele.second-ele.first+1, ...res.arr);
            if(res.baseIndex - ele.first>1) {
                stack.push(new Pair(ele.first, res.baseIndex-1));
            }
            if(ele.second - res.baseIndex>1) {
                stack.push(new Pair(res.baseIndex+1, ele.second));
            }
        }
    }
    return example;
}    