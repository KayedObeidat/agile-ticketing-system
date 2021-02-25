const Task = require('../../models/task')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')


exports.createTask = (req, res) => {
    try{
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
    catch(err){
        res.status(400).send(err)
    }
}
exports.readTasks = (req, res) => {
    try {
        const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    Task.find({  }).then(task => res.status(200).json(task))
    } 
    catch (err) {
        res.status(400).send(err)
    }
}

// exports.readTask = (req, res) => {
//     try{
//         const task = Task.findById(req.params.id)
//         if(!task){
//             res.status(404).send()
//         }
//         res.status(200).send(task)
//     }catch(e){
//         res.status(400).send(e)
//     }
// }