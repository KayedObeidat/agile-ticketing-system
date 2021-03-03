const { body, validationResult } = require('express-validator');
const Project = require('../../models/project');
const { singleProject } = require('../../services/projectService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await singleProject(req.params.id);
      const response = {
        id: result._id,
        completed: result.completed
      }
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({errorMsg: error.message});
    }
  };
  
