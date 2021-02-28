const mongoServices = require('./mongoService');

exports.addProject = async (data) => {
  const dbProject = await mongoServices.insertProject(data);
  const { __v, ...project } = dbProject;
  return project;
};
