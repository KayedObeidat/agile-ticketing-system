const { body, validationResult } = require('express-validator');
const { availableUser } = require('../../services/userService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await availableUser();
      const response = result.map(doc => 
        { return {
          id: doc._doc._id,
          name: doc._doc.name,
          email: doc._doc.email,
        }
        }) 
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  