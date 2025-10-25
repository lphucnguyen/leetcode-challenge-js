/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.size = k
    this.matchingValue = value;
    this.stream = [];
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    if (num === this.matchingValue) {
        this.stream.push(num);

        if (this.stream.length < this.size) {
            return false;
        }

        return true;
    } else {
        // If there is a value not equal to the matchingValue, reset the stream. The stream only store the k integers equal to the matchingValue
        // Ex: [4,4,4,3], k = 3 => the last 3 integers is [4,4,3], 3 is not equal to 4
        this.stream = [];

        return false;
    }
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */