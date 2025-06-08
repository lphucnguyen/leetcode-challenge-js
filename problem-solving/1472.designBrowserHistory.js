/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.forwardStack = [];
    this.backStack = [homepage];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    // It clears up all the forward history.
    this.forwardStack = [];
    this.backStack.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps && this.backStack.length > 1) {
        this.forwardStack.push(this.backStack.pop());
        steps--;
    }

    return this.backStack[this.backStack.length - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps && this.forwardStack.length > 0) {
        this.backStack.push(this.forwardStack.pop());
        steps--;
    }

    return this.backStack[this.backStack.length - 1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */