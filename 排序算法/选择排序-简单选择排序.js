/* 
    选择排序：在未有序的序列中选择最小（大）放在第一个位置
    selectSort
    example:[3, 42, 5, 23, 6, 10]
 */
const example = [3, 42, 5, 23, 6, 10];
const res = selectSort(example);
console.log('res', res);

function selectSort(example) {
    const arr = [...example];
    const len = arr.length;
    if(!len) return arr;
    let temp = -1;
    let tempC = 0;

    for (let i = 0; i < len; i++) {
        temp = i;
        for (let j = i + 1; j < len; j++) {
            if(arr[j]<arr[temp]) {
                temp = j;
            }
        }
        if(temp !== i) {
            tempC = arr[temp];
            arr[temp] = arr[i];
            arr[i] = tempC;
        }
    }
    return arr;
}