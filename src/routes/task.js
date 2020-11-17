const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
const mongoose = require('mongoose')
const validator = require('validator')
const services = require('../services/task')
const { body, validationResult } = require('express-validator')
const validation = require('../validation/validation')

router.post('/tasks',
    validation.validTask('createTask'),
    services.createTask
)

router.get('/tasks',
    services.readTasks
)

router.get('/tasks/:id', async(req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        if(!task){
            res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/tasks/update/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allwoedUpdates = ['title', 'description', 'status']
    const isValidOperation = updates.every((update) => {
        return allwoedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({Error: 'Invalid Updates'})
    }

    try{
       const task = await Task.findById(req.params.id)
       updates.forEach((update) => {
        task[update] = req.body[update]
    })
    await task.save()
    if(!task){
        res.status(404).send()
    }
    res.send(task)
 }catch(e){
    res.status(400).send(e)
 }

})


module.exports = router