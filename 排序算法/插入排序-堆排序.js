/* 
    堆排序：先初始化堆，再一个个输出
    example: [3, 42, 5, 23, 6, 10]
    res: []
*/

const arr = [3, 42, 5, 23, 6, 10];
const res = heapSort(arr);
console.log('res', res)

function heapSort(arr) {
    const len = arr.length;
    if(!len || len === 1) return arr;
    let temp = 0;

    // 构造堆
    for (let i = (len>>1)-1; i >= 0; i--) {
        arr = adjustDown(arr, i, len);
    }

    // 输出堆顶元素
    for (let i = len-1; i > 0; i--) {
        // 交换
        temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        arr = adjustDown(arr, 0, i);
    }

    return arr;
}

function adjustDown(arr, parent, length) {
    let child = (parent<<1)+1;
    let temp = 0;
    while (child < length) {
        // 巧妙之处：child+1<length 不仅适用构造堆，而且适用后边输出
        if (child + 1 < length && arr[child + 1] < arr[child]) { //找到最小的子元素
            child ++;
        }
        if (arr[child] >= arr[parent]) { //如果最小的子元素满足小堆顶
            break;
        }
        temp = arr[child];
        arr[child] = arr[parent];
        arr[parent] = temp;
        parent = child;
        child = (child << 1) + 1;
    }
    return arr;
}