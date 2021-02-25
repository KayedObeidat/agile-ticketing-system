const Task = require('../models/task')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')


exports.createTask = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    Task.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        creator: req.body.creator,
        assignee: req.body.assignee
    }).then(task => res.status(201).json(task))
}

exports.readTasks = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    Task.find({  }).then(task => res.status(200).json(task))

}