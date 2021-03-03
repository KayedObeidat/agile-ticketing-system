const User = require('../models/user')
const Project = require('../models/project')
const Task = require('../models/task')
const mongoose = require('mongoose')
const validator = require('validator')

const { body, validationResult } = require('express-validator')

exports.validate = () => {
       return [ 
          body('name', 'name doesn\'t exists').exists(),
          body('email', 'Invalid email').exists().isEmail(),
          body('password').isLength({ min: 7 })
         ]   
  }

exports.validateProject = () => {
      return [
        body('title', 'title does not exists').exists(),
        body('completed', 'completed does not exists').exists().isBoolean()
      ]
}

exports.validTask = () => {
      return [
        body('title', 'title does not exists').exists(),
        body('creator', 'creator does not exists').exists(),
        body('status', 'status does not exists').exists()
      ]
}
