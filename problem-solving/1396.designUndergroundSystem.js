// TC: O(1)
// SC: O(n), using Map structure
var UndergroundSystem = function() {
    this.check = new Map();
    this.total = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, src, t) {
    this.check.set(id, [src, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, dest, t) {
    const [src, time] = this.check.get(id);
    const key = src + '-' + dest;
    const [total = 0, average = 0] = this.total.get(key) || [];

    this.total.set(src + '-' + dest, [total + (t - time), average + 1]);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [total, average] = this.total.get(startStation + '-' + endStation);

    return total / average;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */