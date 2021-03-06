const { body, validationResult } = require('express-validator');
const { availableProjects } = require('../../services/projectService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await availableProjects();
      const response = result.map(doc => 
        { return {
          id: doc._doc._id,
          completed: doc._doc.completed
        }
        }) 
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  