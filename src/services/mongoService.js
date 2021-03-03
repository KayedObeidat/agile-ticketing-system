const Project = require('../models/project');
const Task = require('../models/task')
const User = require('../models/user')

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

exports.readProjects = async (req, res) => {
  try {
    return await Project.find({  })
  } catch (error) {
    throw error;
  }
}

exports.readProject = async (projectId) => {
  try {
    return await Project.findById(projectId)
  } catch (error) {
    throw error;
  }
}

exports.editProject = async ({ id, completed}) => {
  try {
    const task = await Project.findByIdAndUpdate(id, {completed})
    console.log(task)
    return task
  } catch (error) {
    throw error
  }
}


//Task services


exports.insertTask = async ({ title, owner, description, status, creator, assignee }) => {
  try {
    return await Task.create({
      title,
      description,
      status,
      creator,
      assignee
    }); 
  } catch (error) {
    if ( error && error.code === 11000 ) {
      throw new error('Task is already exist');
    }
    throw error;
  }
};

exports.readTasks = async (req, res) => {
  try {
    return await Task.find({  })
  } catch (error) {
    throw error;
  }
}

exports.readTask = async (taskId) => {
  try {
    return await Task.findById(taskId)
  } catch (error) {
    throw error;
  }
}

exports.editTask = async ({ id, title, description, status, assignee}) => {
  try {
    const task = await Task.findByIdAndUpdate(id, {title, description, status, assignee})
    console.log(task)
    return task
  } catch (error) {
    throw error
  }
}

//User Service

exports.insertUser = async ({name, email, password, age}) => {
  try {
    return await User.create({
      name,
      email,
      password,
      age,
    }); 
  } catch (error) {
    if ( error && error.code === 11000 ) {
      throw new error('User is already exist');
    }
    throw error;
  }
}

exports.readUsers = async (req, res) => {
  try {
    return await User.find({  })
  } catch (error) {
    throw error;
  }
}

exports.readUser = async (userId) => {
  try {
    return await User.findById(userId, {
      completed
    })
  } catch (error) {
    throw error
  }
}

exports.editUser = async ({ id, name, email, password, age}) => {
  try {
    const user = await User.findByIdAndUpdate(id, {name, email, password, age})
    console.log(user)
    return user
  } catch (error) {
    throw error
  }
}