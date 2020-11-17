const Project = require('../models/project')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')

exports.createProject = (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
    
        Project.create({
                title: req.body.title,
                completed: req.body.completed
        }).then(project => res.status(201).json(project))
    }


exports.readProjects = (req, res) => {
       const errors = validationResult(req)
       if(!errors.isEmpty()){
           return res.status(400).json({ errors: errors.array() })
       }
   
       Project.find({  }).then(project => res.status(200).json(project))
   
   }