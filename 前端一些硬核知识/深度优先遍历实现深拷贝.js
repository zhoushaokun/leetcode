/* 
    关键：
    (1)判断数据类型的神奇方法：Object.prototype.toString.call(item).slice(8, -1);
    (2) visitedArr 解决环状引用
    (3)eval 解决属性值是函数
*/
let _toString = Object.prototype.toString;
let map = {
    number: 'Number',
    boolean: 'Boolean',
    array: 'Array',
    object: 'Object',
    string: 'String',
    function: 'Function',
    undefined: 'Undefined',
    null: 'Null',
};
const getType = (item) => _toString.call(item).slice(8, -1);
const isType = (item, type) => {
    return map[type] && map[type] === getType(item);
}

const DFSCopy = (obj, visitedArr) => {
    // 先判断是否存在环状引用
    let _obj = null;
    if(isType(obj, 'array') || isType(obj, 'Object')) {
        let index = visitedArr.indexOf(obj);
        _obj = isType(obj, 'array') ? [] : {};
        if(index >= 0) {
            _obj = visitedArr[index];
        } else {
            visitedArr.push(obj);
            for (let item in obj) {
                    _obj[item] = DFSCopy(obj[item], visitedArr);                    
            }
        }
    } else if (isType(obj, 'function')) { //当为函数
        _obj = eval(`(${obj.toString})`);
    } else {
        _obj = obj;
    }
    return _obj;
};