/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var GetImportance = function(employees, id) {
    const hashEmployee = new Map();

    for (const employee of employees) {
        hashEmployee.set(employee.id, employee);
    }

    const queue = [hashEmployee.get(id)];
    let total = 0;

    while (queue.length) {
        const employee = queue.shift();

        total += employee.importance;

        for (const sub of employee.subordinates) {
            queue.push(hashEmployee.get(sub));
        }
    }

    return total;
};