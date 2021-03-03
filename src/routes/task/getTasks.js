const { body, validationResult } = require('express-validator');
const { availableTask } = require('../../services/taskService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await availableTask();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  