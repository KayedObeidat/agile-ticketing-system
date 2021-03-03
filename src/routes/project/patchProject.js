const { body, validationResult } = require('express-validator');
const {updateProject} = require('../../services/projectService')

 module.exports = async (req, res) => {
     try {
         const errors = validationResult(req)
         if(!errors.isEmpty()){
             return res.status(400).json({errors: errors.array()});
         }
         const data = {
             id: req.params.id,
             completed: req.body.completed
         }
         const result = await updateProject(data);
         return res.status(200).json(result)
     } catch (error) {
        return res.status(500).json({errorMsg: error.message})
     }
 }