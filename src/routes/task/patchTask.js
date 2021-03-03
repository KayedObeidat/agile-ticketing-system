const { body, validationResult } = require('express-validator');
const {updateTask} = require('../../services/taskService')

 module.exports = async (req, res) => {
     try {
         const errors = validationResult(req)
         if(!errors.isEmpty()){
             return res.status(400).json({errors: errors.array()});
         }
         const data = {
             id: req.params.id,
             title: req.body.completed,
             description: req.body.description,
             status: req.body.status,
             assignee: req.body.assignee

         }
         const result = await updateTask(data);
         return res.status(200).json(result)
     } catch (error) {
        return res.status(500).json({errorMsg: error.message})
     }
 }