const { body, validationResult } = require('express-validator');
const { addTask } = require('../../services/taskService');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await addTask(req.body);
    const response = {
      id: result._doc._id,
      title: result._doc.title,
      creator: result._doc.creator,
      assignee: result._doc.assignee,
    };
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
