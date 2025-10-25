/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.cells = new Map();
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.cells.set(cell, value);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.cells.set(cell, 0);
};

/** 
 * @param {string} formula
 * @return {number}
 */
// TC: O(n)
// SC: O(n), using map
Spreadsheet.prototype.getValue = function(formula) {
    formula = formula.slice(1);
    const values = formula.split('+');
    let sum = 0;

    for (const value of values) {
        if (Number.isInteger(+value)) {
            sum += +value;
            continue;
        }

        if (!this.cells.has(value)) {
            this.cells.set(value, 0);
        }

        sum += this.cells.get(value);
    }

    return sum;
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */