const Project = require('../models/project');

exports.insertProject = async ({ title, completed }) => {
  try {
    return await Project.create({
      title,
      completed,
    }); 
  } catch (error) {
    if ( error && error.code === 11000 ) {
      throw new error('project already exist');
    }
    throw error;
  }
};
