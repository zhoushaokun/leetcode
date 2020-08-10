/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.helper = [];
};

function getTop(arr) {
    return arr[arr.length - 1];
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if( (x <= getTop(this.helper) || !this.helper.length) ) {
        this.helper.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let res = this.stack.pop();
    console.log('res', res)
    if(res === getTop(this.helper)) {
        this.helper.pop();
    }
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return getTop(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return getTop(this.helper);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

