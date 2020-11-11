const User = require('../models/user')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')

// exports.validate = [
//     body('email').isEmail(),
  
//     body('password').isLength({ min: 7 })
// ]
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

//   exports.validateId = (method) => {
//       switch(method) {
//           case 'id': {
//             body('id', 'id doesn\'t exists').exists()
//           }
//       }
//   }

//   exports.readUser = (req, res) => {
//       const errors = validationResult(req)
//       if(!errors.isEmpty()){
//           return res.status(404).send({ errors: errors.array() })
//       }
//       User.findById(req.params.id).then(users => res.status(200).send(user) )
//   }

exports.createUser = (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
    
        User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age
        }).then(user => res.status(201).json(user))
    }


exports.readUsers = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    User.find({  }).then(user => res.status(200).json(user))

}
