const express = require("express");
const Task = require("../../models/task");
const mongoose = require('mongoose');
const validator = require('validator');
const services = require("../../services/task");
// const validator = require('validator');
const { body, validationResult } = require('express-validator');
const validation = require("../../validation/validation");

const router = new express.Router();


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

module.exports = router