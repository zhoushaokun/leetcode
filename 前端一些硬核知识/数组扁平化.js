const arr = [1,3,42,[23,43,[7,3,5]],0,[1,3]];
const res = flatternRest(arr);
const res1 = flatternJoin(arr);
console.log('length', res.length);
console.log('length', res1.length);
console.log('res', res)
console.log('res', res1)

function judgeIfArray(item) {
    // return Object.prototype.toString.call(item).slice(8, -1) === 'Array';
    return Array.isArray(item);
}
// function judgeIfArray1(item) {
//     return Object.prototype.toString.call(item).slice(8, -1) === 'Array';
//     // return Array.isArray(item);
// }

// reduce 方法
function flatternReduce(arr) {
    return arr.reduce( (total, value) => {
        return total.concat(judgeIfArray(value) ? flatternReduce(value) : value);
    }, []);
}

function flatterReduceV1(arr) {
    const stack = [];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(judgeIfArray(arr[i])) { // 如果是数组，

        }
        while(stack.length) {

        } 
    }
}

// toString & split 方法
function flatternToString(arr) {
    return arr.toString().split(',').map( (item) => {
        return Number(item);
    });
}

// join & split 方法
function flatternJoin(arr) {
    return arr.join(',').split(',').map( (item) => Number(item));
}

// 非递归方法
function flatternNotRecurse(arr) {
    // const len = arr.length;
    let i = 0;
    while (i < arr.length) {
        if(Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
        } else {
            i ++;
        }
    }
    return arr;
}

function flatternRest(arr) {
    // 原理：
    // arr = [1,2,3, [4, 5]]  [].cancat(...arr) 后 得到 [1, 2, 3, 4, 5]
    function hasArray(arr) {
        return arr.some(Array.isArray);
    }
    while (hasArray(arr)) {
        arr = [].concat(...arr);
    }
    return arr;
}