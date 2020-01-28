/*
    插入排序：未排好序的序列中逐个遍历，将其插入到排好序的有序序列中
    example: [3, 42, 5, 23, 6, 10]
    res: []
*/
const example = [3, 42, 5, 23, 6, 10];
const res = insertSort(example);
console.log('res', res);

function insertSort(example) {
    const arr =  [...example];
    if(!example.length) return arr;
    // const arr = example.slice(0);
    // const arr = example.concat([]);
    
    const len = arr.length;
    // const res = [];
    let insertElement = 0;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i]<arr[j]){
                [insertElement] = arr.splice(i,1);
                console.log('insertElement', insertElement);
                if(j === 0) {
                    arr.unshift(insertElement);
                } else {
                    arr.splice(j, 0, insertElement);
                }
            }
        }
    }
    return arr;
}
