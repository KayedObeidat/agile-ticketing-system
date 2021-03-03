const { body, validationResult } = require('express-validator');
const {updateUser} = require('../../services/userService')

 module.exports = async (req, res) => {
     try {
         const errors = validationResult(req)
         if(!errors.isEmpty()){
             return res.status(400).json({errors: errors.array()});
         }
         const data = {
             id: req.params.id,
             name: req.body.name,
             email: req.body.email,
             password: req.body.password,
             age: req.body.age
         }
         const result = await updateUser(data);
         return res.status(200).json(result)
     } catch (error) {
        return res.status(500).json({errorMsg: error.message})
     }
 }