const express = require('express')
const Project = require('../../models/project')
const mongoose = require('mongoose')
const validator = require('validator')
const services = require('./services')
const { body, validationResult } = require('express-validator')
const validation = require('../../validation/validation')

// Daoud added code
const addProjectController = require('./addPorject');

const router = new express.Router()

router.post(
  '/project',
  validation.validateProject('createProject'),
  addProjectController,
  // services.createProject
);

router.get('/project', 
    services.readProjects
)

router.get('/project/:id', async(req, res) => {
    try{
        const project = await Project.findById(req.params.id)
        if(!project){
            res.status(404).send({Error: 'Invalid ID'  })
        } 
        res.status(200).send(project)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/project/update/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allwoedUpdates = ['title', 'completed']
    const isValidOperation = updates.every((update) => {
        return allwoedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({Error: 'Invalid Updates'})
    }

    try{
       const project = await Project.findById(req.params.id)
       updates.forEach((update) => {
        project[update] = req.body[update]
    })
    await project.save()
    if(!project){
        res.status(404).send()
    }
    res.send(project)
 }catch(e){
    res.status(400).send(e)
 }

})

module.exports = router