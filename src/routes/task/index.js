const express = require("express");
const Task = require("../../models/task");
const mongoose = require('mongoose');
const validator = require('validator');
const { body, validationResult } = require('express-validator');
const validation = require("../../validation/validation");


const addTaskController = require('./addTask');
const readTasksController = require('./getTasks');
const readTaskController = require('./getTask');
const updateTaskController = require('./patchTask')

const router = new express.Router();

router.post(
    '/tasks',
    validation.validTask(),
    addTaskController
)

router.get(
    '/tasks',
    readTasksController
)

router.get(
    '/tasks/:id',
    readTaskController,
)

router.patch(
    '/tasks/update/:id',
    updateTaskController
)

module.exports = router