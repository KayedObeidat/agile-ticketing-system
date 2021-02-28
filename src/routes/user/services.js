const User = require('../../models/user')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')

exports.createUser = (req, res) => {
            try {
        User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age
        }).then(user => res.status(201).json(user))
            } catch (err) {
                const errors = validationResult(req)
                if(!errors.isEmpty()){
                    return res.status(400).json({ errors: errors.array() })
                } 
            }
    }

exports.readUsers = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    User.find({  }).then(user => res.status(200).json(user))

}
