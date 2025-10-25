/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.heap = new MinPriorityQueue();

    for (let i = 1; i <= n; i++) {
        this.heap.enqueue(i);
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.heap.dequeue();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.heap.enqueue(seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */