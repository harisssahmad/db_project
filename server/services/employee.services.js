const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query('SELECT * FROM employees')
    return records;
}

module.exports.getEmployeeById = async (id) => {
    const [record] = await db.query('SELECT * FROM employees WHERE  id = ?', [id])//the / mark will be replaced by the 1st element in the array 
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [record] = await db.query('DELETE FROM employees WHERE id = ?', [id])
    return record.affectedRows;
}

module.exports.addOrEdit = async (obj, id = 0) => {
    const [{affectedRows}] = await db.query('CALL usp_employee_add_or_edit(?,?,?,?)', 
    [id, obj.name, obj.employee_code, obj.salary])
    return affectedRows;
}