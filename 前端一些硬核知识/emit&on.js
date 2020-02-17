const typeList = {
    array: 'Array',
    function: 'Function',
}

const isType = function (item, targetType) {
    return Object.prototype.toString.call(item).slice(8, -1) === targetType;
}

class Watcher {
    constructor(){
        this.events = new Map();
    }

    on(type, cb) {
        if(isType(cb, typeList.function)) {
            this.events.set(type, cb);
        }
    }

    emit(type) {
        let handle = this.events.get(type);
        handle.call(this, ...Array.prototype.slice.call(arguments, 1));
    }
}

const w = new Watcher();
w.on('click', function (content) {
    console.log('click!!', content);
});
w.emit('click', 'world');