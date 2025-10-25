/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
// TC: O(n)
// SC: O(n)
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    this.freq = new Map();
    for (const num of nums2) {
        this.freq.set(num, (this.freq.get(num) || 0) + 1);
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// TC: O(1)
// SC: O(1)
FindSumPairs.prototype.add = function(index, val) {
    const old = this.nums2[index];

    this.freq.set(old, this.freq.get(old) - 1);

    this.nums2[index] += val;
    const updated = this.nums2[index];

    this.freq.set(updated, (this.freq.get(updated) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
FindSumPairs.prototype.count = function(tot) {
    let count = 0;

    for (const num of this.nums1) {
        count += this.freq.get(tot - num) || 0;
    }

    return count;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */