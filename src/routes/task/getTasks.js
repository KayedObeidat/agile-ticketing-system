const { body, validationResult } = require('express-validator');
const { availableTask } = require('../../services/taskService');

module.exports = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await availableTask();
      const response = result.map(doc => 
        { return {
          id: doc._doc._id,
          title: doc._doc.title,
          status: doc._doc.status,
          creator: doc._doc.creator,
          assignee: doc._doc.assignee

        }
        }) 
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  