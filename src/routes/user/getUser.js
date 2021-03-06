const { body, validationResult } = require('express-validator');
const User = require('../../models/user');
const { singleUser } = require('../../services/userService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await singleUser(req.params.id);
      const response = {
        id: result._doc._id,
        name: result._doc.name,
        email: result._doc.email,
        age: result._doc.age
      }
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({errorMsg: error.message});
    }
  };
  
