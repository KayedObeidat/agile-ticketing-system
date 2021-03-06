const Project = require('../models/project');
const mongoServices = require('./mongoService');

exports.addProject = async (data) => {
  const dbProject = await mongoServices.insertProject(data);
  const { __v, ...project } = dbProject;
  return project;
};


exports.availableProjects = () => {
  const dbProject = mongoServices.readProjects();
 return dbProject;
}

exports.singleProject = (projectId) => {
  const dbProject = mongoServices.readProject(projectId);
  return dbProject;
}

exports.updateProject = async (data) => {
  const dbTask = await mongoServices.editProject(data)
  return dbTask;
}