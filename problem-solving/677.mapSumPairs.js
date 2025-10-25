// SC: O(n)
var MapSum = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
// TC: O(1)
MapSum.prototype.insert = function(key, val) {
    this.map.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
// TC: O(n*m), n is the length of the map, m is the length of prefix
MapSum.prototype.sum = function(prefix) {
    let total = 0;

    for (const [key, value] of this.map) {
        if (key.startsWith(prefix)) {
            total += value;
        }
    }

    return total;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */