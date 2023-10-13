const express = require('express'),
router = express.Router()



const service = require('../services/employee.services')

//http:localhost:3000/api/employees/
router.get('/', async (req,res) => {
    const employees = await service.getAllEmployees()
    res.send(employees);
})

router.get('/:id', async (req,res) => {
    const employee = await service.getEmployeeById(req.params.id)
    if(employee.length == 0 ){
        res.status(404).json('No record with such id: ' + req.params.id);
    }
    else{
        res.send(employee);
    }
})


router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteEmployee(req.params.id)
    if(affectedRows == 0 ){
        res.status(404).json('No record with such id: ' + req.params.id);
    }
    else{
        res.send('Deleted the record successfully');  
    }
})

router.post('/', async (req, res) => {
    await service.addOrEdit(req.body)
    res.status(201).send('Created successfully');
})

module.exports = router;