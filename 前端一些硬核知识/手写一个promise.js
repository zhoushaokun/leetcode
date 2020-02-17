const STATUS = {
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

function MyPromise(executor) {
    let self = this;
    this.reason = null;
    this.value = null;
    this.status = STATUS.PENDING;
    this.fullfilledCbs = [];
    this.rejectedCbs = [];
    
    function resolve(value) {
        if(self.status === STATUS.PENDING) {
            self.status = STATUS.RESOLVED;
            self.value = value;
            self.fullfilledCbs.forEach( (fn) => {
                fn(value);
            });
        }
    }
    function reject(reason) {
        if (self.status === STATUS.PENDING) {
            self.status = STATUS.REJECTED;
            self.reason = reason;
            self.rejectedCbs.forEach((fn) => {
                fn(reason);
            });
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

MyPromise.prototype.then = function (onFufilled, onRejected) {
    let promiseNext = null;
    let self = this;

    promiseNext = new MyPromise(function (resolve, reject) {
        if(self.status === STATUS.RESOLVED) {
            let x = onFufilled(self.value);
            resolve(x);
        } else if(self.status === STATUS.REJECTED) {
            let y = onRejected(self.value);
            reject(y);
        } else if(self.status === STATUS.PENDING) {
            self.fullfilledCbs.push( (value) => {
                let x = onFufilled(value);
                resolve(x);
            });
            self.rejectedCbs.push( (reason) => {
                let y = onRejected(reason);
                reject(y);
            });
        }
    });

    return promiseNext;
}

MyPromise.prototype.resolvePromise = function (promiseNext, x, resolve, reject) {
    let self = this;
    let called = false;

    if(x === promiseNext) {
        return reject(new TypeError('循环引用'));
    } 

    if(Object.prototype.toString.call(x).slice(8, -1) === 'Object') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, (value) => {
                    if (!called) return;
                    self.resolvePromise(promiseNext, value, resolve, reject);
                    called = true;
                }, (reason) => {
                    if (!called) return;
                    self.resolvePromise(promiseNext, reason);
                    called = true;
                });
            } else {
                if (called) return;
                called = true;
                resolve(x);
            }
        } catch (e) {
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}

let test = new MyPromise(function (resolve, reject) {
    setInterval( () => {
        resolve(111);
    }, 500);
});

test.then(function (value) {
    console.log('value', value);
    setTimeout(() => {
        return 222;
    }, 500);
}).then(function (value) {
    console.log('value', value)
});