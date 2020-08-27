/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function(data) {
    if(data !== undefined) {
        this.stackMain = data;
    } else {
        this.stackMain = [];
    }
    this.stackHelp = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackMain.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    /* 
        如果stackHelp是否为空，不空直接弹出
            如果stackHelp为空，则检查stackMain是否为空
                如果不为空，则将stackMain中的数据全部弹出push进stackHelp中
                并弹出 stackHelp 的栈顶元素
                如果为空，返回 -1
    */
    if(this.peek() > -1){
        return this.stackHelp.pop();
    }
    return -1;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const stackMain = this.stackMain;
    const stackHelp = this.stackHelp;
    if (stackHelp.length) {
        return stackHelp[stackHelp.length - 1];
    }
    if (stackMain.length) {
        while (stackMain.length) {
            stackHelp.push(stackMain.pop());
        }
        return stackHelp[stackHelp.length - 1];
    }
    return -1;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackMain.length === 0 && this.stackHelp.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

