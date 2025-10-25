/**
 * @param {number} size
 */
var Bitset = function(size) {
    this.set0 = new Set();
    this.set1 = new Set();
    this.bits = new Array(size).fill('0');

    for (let i = 0; i < size; i++) {
        this.set0.add(i);
    }
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    if (this.set0.has(idx)) {
        this.set1.add(idx);
        this.set0.delete(idx);
    }
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if (this.set1.has(idx)) {
        this.set0.add(idx);
        this.set1.delete(idx);
    }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    [this.set0, this.set1] = [this.set1, this.set0];
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.set0.size === 0;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.set1.size > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.set1.size;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    for (let i = 0; i < this.bits.length; i++) {
        this.bits[i] = this.set0.has(i) ? '0' : '1';
    }

    return this.bits.join('');
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */