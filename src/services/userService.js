const User = require('../models/user');
const mongoServices = require('./mongoService')

exports.addUser = async (data) => {
  const dbUser = await mongoServices.insertUser(data)
  const { __v, ...user } = dbUser;
  return user;
};

exports.availableUser = () => {
    const dbUser = mongoServices.readUsers();
   return dbUser;
  }

exports.singleUser = (userId) => {
  const dbUser = mongoServices.readUser(userId);
  return dbUser;
}

exports.updateUser = async (data) => {
  const dbUser = await mongoServices.editUser(data)
  return dbUser;
}