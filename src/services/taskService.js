const Task = require('../models/task');
const mongoServices = require('./mongoService');

exports.addTask = async (data) => {
    const dbTask = await mongoServices.insertTask(data);
    const {__v, ...task} = dbTask;
    return task;
}

exports.availableTask = () => {
    const Task = mongoServices.readTasks();
   return Task;
}

exports.singleTask = (taskId) => {
    const dbTask = mongoServices.readTask(taskId);
    return dbTask;
  }

  exports.updateTask = async (data) => {
    const dbTask = await mongoServices.editTask(data)
    return dbTask;
  }
