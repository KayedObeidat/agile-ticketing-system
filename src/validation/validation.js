const User = require('../models/user')
const Project = require('../models/project')
const mongoose = require('mongoose')
const validator = require('validator')

const { body, validationResult } = require('express-validator')

exports.validate = (method) => {
    switch (method) {
      case 'createUser': {
       return [ 
          body('name', 'name doesn\'t exists').exists(),
          body('email', 'Invalid email').exists().isEmail(),
          body('password').isLength({ min: 7 })
         ]   
      }      
    }
  }

exports.validateProject = (method) => {
  switch (method) {
    case 'createProject': {
      return [
        body('title', 'title does not exists').exists(),
        body('completed', 'completed does not exists').exists().isBoolean()
      ]
    }
  }
}

exports.validTask = (method) => {
  switch (method) {
    case 'createTask': {
      return [
        body('title', 'title does not exists').exists(),
        body('creator', 'creator does not exists').exists(),
        body('status', 'status does not exists').exists()
        // body('isReporter', 'isReporter does not exists').exists().isBoolean(),
        // body('isCreator', 'isCreator does not exists').exists().isBoolean()
      ]
    }
  }
}
