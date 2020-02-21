var myInstanceOf = function (target, Creator) {
    if(target === null) return false;
    let context = target;
    while(context.__proto__ !== null) {
        if(context.__proto__ === Creator.prototype) {
            return true;
        }
        context = context.__proto__;
    }
    return false;
};

console.log('myInstanceOf', myInstanceOf(Number(1), Number))

