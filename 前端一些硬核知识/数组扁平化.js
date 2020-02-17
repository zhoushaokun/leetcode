const arr = [1,3,42,[23,43,[7,3,5]],0,[1,3]];
const res = flattern(arr);
console.log('length', res.length);
console.log('res', res)

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