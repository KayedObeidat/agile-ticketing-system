const express = require("express");
const Task = require("../../models/task");
const mongoose = require('mongoose');
const validator = require('validator');
const services = require("../../services/task");
// const validator = require('validator');
const { body, validationResult } = require('express-validator');
const validation = require("../../validation/validation");

const router = new express.Router();


router.post('/tasks',()=>{
    try {
        validation.validTask('createTask'),
    services.createTask
    } catch (err) {
        console.log(err)
    }
}
    
)

module.exports = router