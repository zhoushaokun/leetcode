/* 
    冒泡排序：每次交换两个元素，从而好像最小（大）的元素慢慢地浮出水面
    注意：每次排序都会导致最后两个元素有序
    popSort
    example:[3, 42, 5, 23, 6, 10]
*/
const example = [3, 42, 5, 23, 6, 10];
const res = popSort(example);
console.log('res', res);

function popSort(example) {
    const arr = [...example];
    if(!arr.length) return arr;
    const len = arr.length;
    let temp = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if(arr[j+1] < arr[j]){ //后边小于前边，就交换位置
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    } 
    return arr;   
}