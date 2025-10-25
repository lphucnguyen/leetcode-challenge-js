// Solution: 2 HashTable
var FrequencyTracker = function() {
    this.freq = {};
    this.freqOfFreq = {};
};

/**
 * @param {number} number
 * @return {void}
 */
// TC: O(1)
// SC: O(1)
FrequencyTracker.prototype.add = function(number) {
    if (this.freq[number]) {
        const temp = this.freq[number];
        this.freqOfFreq[temp]--;
    }

    this.freq[number] = (this.freq[number] || 0) + 1;

    const numFreq = this.freq[number];
    this.freqOfFreq[numFreq] = (this.freqOfFreq[numFreq] || 0) + 1;
};

/**
 * @param {number} number
 * @return {void}
 */
// TC: O(1)
// SC: O(1)
FrequencyTracker.prototype.deleteOne = function(number) {
    if (!this.freq[number]) {
        return null;
    }

    const old = this.freq[number];
    this.freqOfFreq[old]--;

    this.freq[number]--;

    const updated = this.freq[number];
    this.freqOfFreq[updated]++;
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
// TC: O(1)
// SC: O(1)
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    if (!this.freqOfFreq[frequency]) {
        return false;
    }

    return this.freqOfFreq[frequency] > 0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */